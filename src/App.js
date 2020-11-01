import React from "react";
import "./styles.css";
import Nav from "./nav";
import Container from "react-bootstrap/Container";
import Card from "./card.js";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Container style={{ marginTop: "30px" }}>
        <Card />
      </Container>
    </div>
  );
}
