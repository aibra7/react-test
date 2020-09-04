
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useForm = (cb, validate, cardType, setResponseMessage) => {
  const [values, setValues] = useState({ cardType });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successCall = true; // change this to false for fail response simulation
  const submitForm = () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (successCall) {
        fetch('http://www.mocky.io/v2/5d8de422310000b19d2b517a')
          .then((response) => response.json())
          .then((data) => {
            if (data.invoiceNo) {
              setResponseMessage({ message: data.invoiceNo, success: true, });
              cb();
            }
          });
      } else {
        fetch('http://www.mocky.io/v2/5d8de441310000a2612b517c')
          .then((response) => response.json())
          .then((data) => {
            if (data.responseMessage) {
              setResponseMessage({ message: data.responseMessage, success: false, });
              cb();
            }
          });
      }

    }
  };

  useEffect(submitForm, [errors]);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

useForm.propTypes = {
  callback: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  cardType: PropTypes.string.isRequired,
  setResponseMessage: PropTypes.string.isRequired,
}

export default useForm;