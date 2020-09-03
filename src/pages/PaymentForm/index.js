import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const PaymentForm = ({ cardTypes, setFormVisibility }) => {
  const [cardTypeSelected, setCardType] = useState('');

  return (
    <Form>
      <Form.Group controlId="formCardType" className="formGroup">
        <Form.Label className="formLabel">Card Types:</Form.Label>
        <Form.Control
          as="select"
          defaultValue={cardTypeSelected}
          placeholder="Card"
          onChange={event => setCardType(event.target.value)}
        >
          {cardTypes.map(cardType => (
            <option key={cardType.id}>{cardType.value}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCardNumber" className="formGroup">
        <Form.Label className="formLabel">Card Number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formExpiry" className="formGroup">
        <Form.Label className="formLabel">Expiry</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formName" className="formGroup">
        <Form.Label className="formLabel">Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formEmail" className="formGroup">
        <Form.Label className="formLabel">Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="submitButton"
        onClick={event => {
          event.preventDefault();
          setFormVisibility(false);
        }}
      >
        Confirm Payment
      </Button>
    </Form>
  );
};

PaymentForm.propTypes = {
  cardTypes: PropTypes.array.isRequired,
  setFormVisibility: PropTypes.func.isRequired,
};

export default PaymentForm;
