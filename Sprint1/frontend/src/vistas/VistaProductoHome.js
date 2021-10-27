import React from "react";
import productos from "../productos";
import { Row, Col } from "react-bootstrap";
import Producto from "../components/Producto";

const VistaProductoHome = () => {
  return (
    <>
      <h1>Ultimos Productos</h1>
      <Row>
        {productos.map((producto) => (
          <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
            <Producto producto={producto} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default VistaProductoHome;
