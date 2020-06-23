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

const Charts = () =>{
  return (
    <>
    <Header/>
    <section className='table'></section>
    <PlainFooter/>
    </>
  )
}


export default Charts;