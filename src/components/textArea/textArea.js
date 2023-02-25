import React from "react";
import { Form } from "react-bootstrap";

export const TextArea = ({ textArea, value, sub }) => {
  return (
    <div>
      <label>{textArea} :</label>
      <br />
      <Form.Control as="textarea" aria-label="With textarea" placeholder={`masukan${textArea}`} onChange={(e) => sub(e.target.value)} value={value} style={{ height: "20vh" }} />
    </div>
  );
};
