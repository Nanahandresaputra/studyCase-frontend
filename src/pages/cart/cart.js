import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as component from "../../components/index.js";

export const Cart = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Container>
        <Card className="sm-w-50 md-w-100">
          <Card.Header>
            <h3>Keranjang Anda</h3>
          </Card.Header>

          <Container>
            <h3>Total</h3>
            <Form className="mb-2">
              <Card>
                <Row>
                  <Col sm={12} md={6} className="gb-primary">
                    <Card.Img
                      variant="top"
                      style={{ height: "180px", width: "180px", padding: "2px", justifyContent: "center", alignItems: "center" }}
                      src="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Row>
                        <h4>sdsd</h4>
                      </Row>
                      <Row>
                        <h4>3443434</h4>
                      </Row>
                      <Row md={3}>
                        <Col>
                          {" "}
                          <Button variant="primary">-</Button>{" "}
                        </Col>
                        <Col>{3}</Col>
                        <Col>
                          {" "}
                          <Button variant="primary">+</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Form>
          </Container>
          <Link to="/checkout">
            <Button className="w-100" variant="primary">
              Checkout
            </Button>
          </Link>
          <component.Gap sty="5px" />
        </Card>
      </Container>
    </div>
  );
};
