import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Pagination from '../components/pagination';
import axios from "axios";
import {
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import PlainFooter from "../components/plain-footer";

const Stats = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [totalPosts,setTotalPosts] = useState(0);
  const [active, setActive] = useState(1);
  let items = [];
  const fetchData = (startIndex) => {
    setLoading(true);
    axios.get(`http://localhost:5000/users/${startIndex}`)
      .then((res) => {
        setData(res.data.users);
        setLoading(false);
      })
      .then(() => {
        axios.get(`http://localhost:5000/total`).then((res)=>{
          setTotalPosts(res.data)
        })
      });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost- postsPerPage;

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleClickonRow = (e)=>{
    console.log
  }
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
                {data.map((user) => {
                  return (
                    <tr onClick={} key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.ip_address}</td>
                      <td>{user.total_clicks}</td>
                      <td>{user.total_page_views}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </section>
        </Row>
        <Row className="justify-content-center">
          <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts = {totalPosts}
          setPage={fetchData}
          />
        </Row>
      </Container>

      <PlainFooter />
    </>
  );
};

export default Stats;
