import React, { useEffect, useState } from "react";
import Pagination from '../components/pagination';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col
} from "reactstrap";
import Header from "../components/Header";
import CircularProgress from '@material-ui/core/CircularProgress';
import PlainFooter from "../components/plain-footer";

const Stats = ({setCurrentUser}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const postsPerPage=50;
  const [totalPosts,setTotalPosts] = useState(0);
  const history = useHistory();

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

  const handleClickOnRow = (e)=>{
    localStorage.setItem("currentUser",e.target.parentElement.firstChild.innerHTML); 
    history.push('./user');
  }
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem onClick={()=>{history.push('./')}} tag="a" href="#">
              Main page
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              User statistics
            </BreadcrumbItem>
          </Breadcrumb>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
         
        </Row>
        <Row className="justify-content-center mb-10">
          <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts = {totalPosts}
          setPage={fetchData}
          totalPosts={totalPosts}
          />
        </Row>
      </Container>
      <PlainFooter />
    </>
  );
};

export default Stats;
