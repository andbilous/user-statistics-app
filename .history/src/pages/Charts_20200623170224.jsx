import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Legend from "recharts/lib/component/Legend";
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';
import { Breadcrumb, BreadcrumbItem, Container, Row, Button,Col } from "reactstrap";
import Header from "../components/Header";
import PlainFooter from "../components/plain-footer";

const Charts = () => {
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(new Date(2019,10,2));
  const [toDate, setToDate] = useState(0);
  const history = useHistory();
  const fetchData = useCallback((dateFrom, dateTo) => {
    axios
      .get(`http://localhost:5000/user/${localStorage.getItem('currentUser')}/${dateFrom}/${dateTo}`)
      .then((res) => {
        setData(res.data.data);
      });
  });

  const handleChangeRange = () => {
    fetchData(new Date(fromDate), new Date(toDate));
  };

  useEffect(() => {
    let toDate = new Date(2019,10,2);
    let fromDate = new Date(toDate.getTime() - 60 * 60 * 24 * 7 * 1000);
    fetchData(fromDate, toDate);
  }, [fetchData]);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem
              onClick={() => {
                history.push("./");
              }}
              tag="a"
              href="#"
            >
              Main page
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              User statistics
            </BreadcrumbItem>
          </Breadcrumb>
        </Row>
        <Row>
          <Col>{data.first_name} {data.last_name}</Col>
          </Row>
          <Row>
            
          <section
            // style={{
            //   margin: "auto",
            //   display: "grid",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   padding: "20px",
            //   border: "1px solid black",
            //   width: "80%",
            // }}
          >
            <div
              // style={{
              //   display: "flex",
              //   justifyContent: "flex-start",
              //   margin: "auto",
              // }}
            >
              <h5>From</h5>
              <DayPickerInput onDayChange={(value) => setFromDate(value)} />
              <h5>To</h5>
              <DayPickerInput onDayChange={(value) => setToDate(value)} />
              <Button onClick={handleChangeRange}>Set Range</Button>
            </div>
            <h5>Clicks</h5>
            <LineChart width={900} height={300} data={data.stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
            <h5>Views</h5>
            <LineChart width={900} height={300} data={data.stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                stroke="red"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </section>
        </Row>
      </Container>
      <PlainFooter />
    </>
  );
};

export default Charts;
