import React from 'react';
import axios from 'axios'
import {
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row
} from "reactstrap";
import Header from "../components/Header";
import PlainFooter from "../components/plain-footer";

const Charts = () => {
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


  useEffect(() => {
    fetchData(1);
  }, []);
  return (
    <>
    <Header/>
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
   
    <PlainFooter/>
    </>
  )
}


export default Charts;