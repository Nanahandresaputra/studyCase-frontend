import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as components from "../../components/index.js";

export const Address = () => {
  return (
    <div>
      <Container>
        <Link to="/profile/addAddress">
          <Button variant="danger">Tambah alamat</Button>
        </Link>
        <components.Gap sty="10px" />
        <Table responsive="sm md lg">
          <thead>
            <tr>
              <th className="w-25">Nama</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nana</td>
              <td>Jawa barat, Majalengka, Jatitujuh, Pilangsari</td>
            </tr>
            <tr>
              <td>Nana</td>
              <td>Jawa barat, Majalengka, Jatitujuh, Pilangsari</td>
            </tr>
            <tr>
              <td>Nana</td>
              <td>Jawa barat, Majalengka, Jatitujuh, Pilangsari</td>
            </tr>
            <tr>
              <td>Nana</td>
              <td>Jawa barat, Majalengka, Jatitujuh, Pilangsari</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
