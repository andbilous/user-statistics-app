import React,{useEffect} from "react";
import Header from "../components/Header";
import { Table, Breadcrumb, BreadcrumbItem } from "reactstrap";
import PlainFooter from "../components/plain-footer";

const Stats = () => {
  const fetchData=(startIndex)=>{
    axios.get(`http://localhost:5000/users/${startIndex}`)
        .then(res => {
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
              <th>Gender</th>
              <th>IP address</th>
              <th>Total clicks</th>
              <th>Total page views</th>
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
