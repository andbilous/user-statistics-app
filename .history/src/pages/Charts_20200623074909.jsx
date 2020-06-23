import React from 'react';
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