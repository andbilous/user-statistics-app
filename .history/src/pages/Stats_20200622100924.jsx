import React from "react";
import Header from "../components/Header";
import { Table, Breadcrumb, BreadcrumbItem } from "reactstrap";
import PlainFooter from "../components/plain-footer";

const Stats = () => {
  return (
    <>
      <Header />
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Main page</BreadcrumbItem>
        <BreadcrumbItem active tag="span">User statistics</BreadcrumbItem>
      </Breadcrumb>
      <section className="table">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gende</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <PlainFooter />
    </>
  );
};

export default Stats;
