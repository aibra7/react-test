
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useForm = (cb, validate, cardType) => {
  const [values, setValues] = useState({ cardType });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitForm = () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      cb();
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
}

export default useForm;