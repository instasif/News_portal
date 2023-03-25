import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import LeftsideNav from "../pages/Shared/LeftsideNav/LeftsideNav";
import RightsideNav from "../pages/Shared/RightsideNav/RightsideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftsideNav />
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightsideNav></RightsideNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
