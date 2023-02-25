import React from "react";
import { Form } from "react-bootstrap";

export const Input = ({ text, type, sub, value }) => {
  return (
    <div>
      <label>
        {text} : <br />
      </label>
      <Form.Control type={type} placeholder={`Enter ${text}`} value={value} onChange={(e) => sub(e.target.value)} />
    </div>
  );
};
