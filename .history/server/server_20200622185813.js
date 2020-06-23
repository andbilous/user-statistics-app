const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./users.json');
const userStats=require('./users_statistic.json');

const app = express();
const port = process.env.PORT || 5000;

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

app.get('/total',(req,res) => users)



app.listen(port, () => console.log(`Listening on port ${port}`));