import React from "react";
import { ListGroup } from "react-bootstrap";

export const List = ({ textList }) => {
  return (
    <div>
      <ListGroup.Item>{textList}</ListGroup.Item>
    </div>
  );
};
