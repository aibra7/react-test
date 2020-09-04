import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const PaymentForm = ({ cardTypes, setFormVisibility }) => {
  const [cardTypeSelected, setCardType] = useState(cardTypes[0].value);

  return (
    <Form>
      <Form.Group controlId="formCardType" className="formGroup">
        <Form.Label className="formLabel">Card Types:</Form.Label>
        <Form.Control
          as="select"
          defaultValue={cardTypeSelected}
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
      <Form.Group className="formGroup">
        <Form.Label  className="formLabel"/>
        <Button
          variant="primary"
          type="submit"
          className="submitButton"
          onClick={event => {
            event.preventDefault();
            // add check if form is valid
            setFormVisibility(false);
          }}
        >
          Confirm Payment
        </Button>
      </Form.Group>
    </Form>
  );
};

PaymentForm.propTypes = {
  cardTypes: PropTypes.array.isRequired,
  setFormVisibility: PropTypes.func.isRequired,
};

export default PaymentForm;
