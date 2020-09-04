import React from 'react';
import PropTypes from 'prop-types';
import usePaymentForm from './usePaymentForm';
import validateForm from './formValidations'
import { Button, Form } from 'react-bootstrap';

const PaymentForm = ({ cardTypes, setFormVisibility }) => {
  const cardType = cardTypes[0].value;
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = usePaymentForm(setFormVisibility, validateForm, cardType);

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCardType" className="formGroup">
        <Form.Label className="formLabel">Card Types:</Form.Label>
        <Form.Control
          as="select"
          name="cardType"
          defaultValue={values.cardType}
          onChange={handleChange}
        >
          {cardTypes.map(cardType => (
            <option key={cardType.id}>{cardType.value}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCardNumber" className="formGroup">
        <Form.Label className="formLabel">Card Number</Form.Label>
        <Form.Control type="text" name="cardNumber" onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formExpiry" className="formGroup">
        <Form.Label className="formLabel">Expiry</Form.Label>
        <Form.Control type="text" name="expiry" onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formName" className="formGroup">
        <Form.Label className="formLabel">Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formEmail" className="formGroup">
        <Form.Label className="formLabel">Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="formGroup">
        <Form.Label  className="formLabel"/>
        <Button
          variant="primary"
          type="submit"
          className="submitButton"
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
