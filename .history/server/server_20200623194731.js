const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const users = require('./users.json');
const userStats=require('./users_statistic.json');

const app = express();
const port = process.env.PORT || 5000;
let db = new sqlite3.Database(':stats:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the Stats SQlite database.');
});

let query = `SELECT DISTINCT ID id FROM users
           ORDER BY id`;

db.all(query, [], (err, rows) => {
  if (err) {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY id,
      first_name TEXT,
      last_name TEXT,
      email: TEXT,
      gender: TEXT,
      ip_address: TEXT
      )`
      );
      db.run(`
      CREATE TABLE IF NOT EXISTS users_statistic (
        user_id INTEGER PRIMARY KEY,
        date TEXT,
        page_views INTEGER,
        clicks: TEXT,
        gender: TEXT,
        ip_address: TEXT
        )`
        );
        {"user_id":33,"date":"2019-10-02","page_views":260,"clicks":565}
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

const getFirstNameAndLastNameById = (id)=>{
  let res={};
  users.forEach(item=>{
    if(item.id.toString()===id){
      res.first_name=item.first_name;
      res.last_name=item.last_name;
    }
  });
  return res;
};


const getUserDataById=(id)=>{
  let resData={
    first_name:'',
    last_name:'',
    stats:[]
  };
  userStats.forEach(item=>{
    if(item.user_id.toString()===id){
      let firstNameLastName=getFirstNameAndLastNameById(item.user_id.toString());
      resData.first_name=firstNameLastName.first_name;
      resData.last_name=firstNameLastName.last_name;
      resData.stats.push({
        date:item.date,
        views:item.page_views,
        clicks:item.clicks
      })
    }
  });
  return resData;
};

const getUserStatsByRange=(id,from,to)=>{
  let resData={
    first_name:'',
    last_name:'',
    stats:[]
  };
  userStats.forEach(item=>{
    if(item.user_id.toString()===id){
      let firstNameLastName=getFirstNameAndLastNameById(item.user_id.toString());
      resData.first_name=firstNameLastName.first_name;
      resData.last_name=firstNameLastName.last_name;
      if (Date.parse(item.date)>=Date.parse(from) && Date.parse(item.date)<=Date.parse(to)){
        resData.stats.push({
          date:item.date,
          views:item.page_views,
          clicks:item.clicks
        })
      }
    }
  });
  return resData;
};

const checkUserById=(id)=>{
  return users.some(user => user.id.toString() === id.toString())
};

const getTotalViewsById=(id)=>{
  let currentUserData=userStats.filter((user)=>user.user_id.toString()===id.toString());
  return  currentUserData.reduce((accumulator, currentValue)=> {
    return accumulator+currentValue.page_views;
  },0);
};

const getTotalClicksById=(id)=>{
  let currentUserData=userStats.filter((user)=>user.user_id.toString()===id.toString());
  return  currentUserData.reduce((accumulator, currentValue)=> {
    return accumulator+currentValue.clicks;
  },0);
};

const getUsers=(number)=>{
  let index = parseInt(number);
  let userData=users.slice();
 let usersWithAdditionalFields= userData.map(user=>
     ({ ...user,
       total_page_views:getTotalViewsById(user.id),
       total_clicks:getTotalClicksById(user.id)
     }));
  return usersWithAdditionalFields.slice(index-1,index+49);
};

app.get('/user/:id',(req,res)=>{
  if(!checkUserById(req.params.id)){
    res.status(404).send('User Not Found');
  }
    res.json({data:getUserDataById(req.params.id)})
});

app.get('/users/:number', (req, res) => res.json({users:getUsers(req.params.number)}));

app.get('/user/:id/:from/:to', (req, res) => {
  if(!checkUserById(req.params.id)){
    res.status(404).send('User Not Found');
  }
  res.json({data:getUserStatsByRange(req.params.id,req.params.from,req.params.to)});
});

app.get('/total',(req,res) => res.json(users.length))



app.listen(port, () => console.log(`Listening on port ${port}`));