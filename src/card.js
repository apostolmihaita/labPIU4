import React from "react";
import Card from "react-bootstrap/Card";

const UnCard = () => {
  const stil = {
    card: { maxWidth: "200px" },
    capCard: {
      width: "80%",
      height: "40px",
      margin: "-12px auto 0 auto"
    },
    textCard: {
      color: "#888"
    }
  };

  return (
    <Card className="text-center h-100 mt-5" style={stil.card}>
      <div className="bg-primary" style={stil.capCard}></div>
      <Card.Body>
        <Card.Title>31.517</Card.Title>
        <Card.Text style={stil.textCard}>
          Înscriși pe liste permanente și speciale
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UnCard;
