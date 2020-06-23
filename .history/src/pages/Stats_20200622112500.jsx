import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Table, Breadcrumb, BreadcrumbItem } from "reactstrap";
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
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Main page
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          User statistics
        </BreadcrumbItem>
      </Breadcrumb>
      <section className="table">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP address</th>
              <th>Total clicks</th>
              <th>Total page views</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </Table>
      </section>
      <PlainFooter />
    </>
  );
};

export default Stats;
