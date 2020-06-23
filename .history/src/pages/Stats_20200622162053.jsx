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
        <Row>
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
          {data.map((user)=>{
                    return (
                        <tr
                            key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.ip_address}</td>
                            <td>{user.total_clicks}</td>
                            <td>{user.total_page_views}</td>
                        </tr>
                        )
                })}
          </tbody>
          <button onClick={()=.}>Next</button>
        </Table>
      </section>
        </Row>
      </Container>
      
      <PlainFooter />
    </>
  );
};

export default Stats;
