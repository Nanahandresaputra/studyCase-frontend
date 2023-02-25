import React from "react";
import { Card, Container, Table } from "react-bootstrap";
import * as component from "../../components/index";

export const Invoice = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Container>
        <Card>
          <Card.Header>
            <h3>Invoice</h3>
          </Card.Header>
          <div className="border container mt-3">
            <Table responsive="sm md lg" size="sm">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td className="ms-5 ps-5">Detail</td>
                </tr>
                <tr>
                  <td>Statuss</td>
                  <td className="ms-5 ps-5">waiting</td>
                </tr>
                <tr>
                  <td>Order ID</td>
                  <td className="ms-5 ps-5">12</td>
                </tr>
                <tr>
                  <td>Total Amount</td>
                  <td className="ms-5 ps-5">120000</td>
                </tr>
                <tr>
                  <td>Billed to</td>
                  <td className="ms-5 ps-5">
                    <h6>Nanan</h6>
                    <p>email</p>
                    <p>Jawa barat, Majalengka, Jatitujuh, Pilangsari, blok jumat, rt011/rw009, jl.raya pilangsari-jatitujuh no.12</p>
                  </td>
                </tr>
                <tr>
                  <td>Payment</td>
                  <td className="ms-5 ps-5">
                    <h6>james</h6>
                    <p>email</p>
                    <p>BRI</p>
                    <p>xxxxxxxxxxxx32</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <component.Gap sty="5px" />
        </Card>
      </Container>
    </div>
  );
};
