import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Producto = ({ producto }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/producto/${producto._id}`}>
        <Card.Img src={producto.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/producto/${producto._id}`}>
          <Card.Title as="div">
            <strong>{producto.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating
            value={producto.rating}
            text={`${producto.numReviews} calificaciones`}
          />
        </Card.Text>
        <Card.Text as="h3">${producto.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Producto;
