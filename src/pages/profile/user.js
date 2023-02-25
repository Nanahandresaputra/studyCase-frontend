import React from "react";
import { Table } from "react-bootstrap";

export const User = () => {
  return (
    <div>
      <div style={{ width: "50%" }}>
        <Table>
          <thead>
            <tr>
              <th>Nama</th>
              <td>Nana</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Email</th>
              <td>testing77@email.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
