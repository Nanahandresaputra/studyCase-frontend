import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import * as components from "../../components/index.js";

export const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      <Card style={{ width: "85%", height: "100%", margin: "auto" }}>
        <Card.Header>
          <h3>Acount</h3>
        </Card.Header>
        <components.Gap sty="7px" />
        <Row>
          <Col lg={4}>
            <ListGroup style={{ width: "45%", marginLeft: "6px", marginBottom: "8px", cursor: "pointer" }}>
              <Link to="/profile/user" style={{ textDecoration: "none" }}>
                <components.List textList={"User"} />
              </Link>
              <Link to="/profile/orders" style={{ textDecoration: "none" }}>
                <components.List textList={"Pemesanan"} />
              </Link>
              <Link to="/profile/address" style={{ textDecoration: "none" }}>
                <components.List textList={"Alamat"} />
              </Link>
              <components.List textList={"Logout"} />
            </ListGroup>
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
