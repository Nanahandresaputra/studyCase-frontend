import { Badge, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navigation = ({ search }) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-5">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/link">link</Nav.Link>
              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Makanan</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Minuman</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Dessert</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex w-50">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e) => search(e.target.value)} />
            </Form>
            <Link to="/cart" className="text-light ms-4 me-4">
              <BsFillCartFill className="fs-4 fw-light" />
              <Badge bg="secondary">9</Badge>
            </Link>
            <Link to="/profile">
              <FaUserAlt className="text-light fs-4" />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
// style={{ width: "50%", margin: "auto" }}
// style={{ color: "white", cursor: "pointer", marginRight: "1em" }}
