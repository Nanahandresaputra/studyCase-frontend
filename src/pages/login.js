import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as components from "../components/index.js";

export const LoginPage = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [pw, setPw] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 1 || pw.length < 1) {
      alert("Email dan Password salah");
      console.error("Email dan Password salah");
    } else {
      navigate("/link");
    }
  };

  let getEmail = (q) => {
    setEmail(q);
  };
  let getPw = (q) => {
    setPw(q);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "30rem", height: "50vh", justifyContent: "center", alignItems: "center", margin: "auto", borderRadius: "8px" }}>
          <components.Input text="Email  " type="email" sub={getEmail} value={email} />
          <components.Gap />
          <components.Input text="Password  " type="password" sub={getPw} value={pw} />
          <components.Gap />
          <Button type="submit" variant="primary">
            Login
          </Button>{" "}
        </Card>
      </form>
    </div>
  );
};
