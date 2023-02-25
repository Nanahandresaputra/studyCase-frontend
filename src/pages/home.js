import { Container } from "react-bootstrap";
import * as components from "../components/index.js";

export const Home = () => {
  return (
    <div>
      <Container>
        <components.Gap />
        <components.CardPoduct />
      </Container>
    </div>
  );
};
