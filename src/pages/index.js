import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import PaymentForm from './PaymentForm';

export default () => {
  const [showPaymentForm, setFormVisibility] = useState(true);
  const [cardTypes, setCardTypes] = useState([]);
  const date = new Date().toLocaleString();

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5d145fa22f0000ff3ec4f030')
      .then((response) => response.json())
      .then((data) => {
        if (data.cardTypes) {
          return setCardTypes(data.cardTypes);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={8} sm={8} md={6} lg={6} className="info">
          <p>Product: ABCD</p>
          <p>Date: {date}</p>
          <p>Amount: 1123.03 USD</p>
        </Col>
        <Col xs={8} sm={8} md={6} lg={6}>
          {showPaymentForm ? (
            <PaymentForm
              cardTypes={cardTypes}
              setFormVisibility={setFormVisibility}
            />
          ) : (
            <div className="info">
              <p>123</p>
              <p>Invoice: </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
