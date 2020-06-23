import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Table, Breadcrumb, BreadcrumbItem,Container,Row } from "reactstrap";
import PlainFooter from "../components/plain-footer";

const Stats = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  let items = [];
  const fetchData = (startIndex) => {
    axios.get(`http://localhost:5000/users/${startIndex}`).then((res) => {
      setData(res.data.users);
    });
  };

  useEffect(() => {
    fetchData(0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Row></Row>
      </Container>
      
      <PlainFooter />
    </>
  );
};

export default Stats;
