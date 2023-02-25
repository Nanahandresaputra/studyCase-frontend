import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Checkout = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Checkout Page</h1>
      <Container>
        <Card className="sm-w-50 md-w-100">
          <Card.Header>
            <h3>Checkout</h3>
          </Card.Header>
          <Container>
            <h4 className="m-5">Konfirmasi</h4>
            <Table>
              <tbody>
                <tr>
                  <td>Alamat</td>
                  <td className="text-center">testing77@email.com</td>
                </tr>
                <tr>
                  <td>Sub total</td>
                  <td className="text-center">testing77@email.com</td>
                </tr>
                <tr>
                  <td>Ongkir</td>
                  <td className="text-center">testing77@email.com</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th className="text-center">testing77@email.com</th>
                </tr>
              </tbody>
            </Table>
            <Row className="mb-3 justify-content-md-center">
              <Col>
                <Button variant="primary" className="text-center w-100" onClick={() => navigate("/cart")}>
                  Sebelumnya
                </Button>
              </Col>
              <Col className="text-end">
                <Link to="/invoice">
                  <Button variant="success" className="text-center w-100">
                    Bayar
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </div>
  );
};
