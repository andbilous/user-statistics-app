import React, { useEffect, useState, } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import Header from "../components/Header";
import PlainFooter from "../components/plain-footer";

const Charts = () => {
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(0);
  const fetchData = useCallback((dateFrom, dateTo) => {
    axios
      .get(`http://localhost:5000/user/${currentUserId}/${dateFrom}/${dateTo}`)
      .then((res) => {
        setData(res.data.data);
      });
  });

  const handleChangeRange = () => {
    fetchData(new Date(fromDate), new Date(toDate));
  };

  useEffect(() => {
    let dateTo = new Date(2019, 9, 15);
    let dateFrom = new Date(dateTo.getTime() - 60 * 60 * 24 * 7 * 1000);
    fetchData(dateFrom, dateTo);
  }, [fetchData]);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="#">
              Main page
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              User statistics
            </BreadcrumbItem>
          </Breadcrumb>
        </Row>
        <Row></Row>
      </Container>

      <PlainFooter />
    </>
  );
};

export default Charts;
