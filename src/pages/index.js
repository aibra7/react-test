import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import PaymentForm from './PaymentForm';

export default () => {
  const [showPaymentForm, setFormVisibility] = useState(true);
  const [cardTypes, setCardTypes] = useState([]);
  const [responseMessage, setResponseMessage] = useState({ message: '', success: true });
  const { message, success } = responseMessage;
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
        <Col xs={12} sm={12} md={6} lg={6} className="info">
          <p>Product: ABCD</p>
          <p>Date: {date}</p>
          <p>Amount: 1123.03 USD</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          {showPaymentForm && cardTypes.length > 0 && (
            <PaymentForm
              cardTypes={cardTypes}
              setFormVisibility={setFormVisibility}
              setResponseMessage={setResponseMessage}
            />
          )}
          {!showPaymentForm && message && (
            <div className={`info ${success ? 'successMessage' : 'failMessage'}`}>
              <p>{success ?
                'Your payment has been successefully processed.'
                : message}
              </p>
              {success && <p>Invoice: {message}</p>}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
