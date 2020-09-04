const validateForm = values => {
  const errors = {};
  const amexCardType = values.cardType === 'Amex';

  if (!values.expiry) {
    errors.expiryInvalid = true;
  } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.expiry)) {
    errors.expiryInvalid = true;
  }

  if (!values.cardNumber) {
    errors.cardNumberInvalid = true;
  } else {
    if (amexCardType && !/^\d{15}$/.test(values.cardNumber)) {
      errors.cardNumberInvalid = true;
    } else if (!amexCardType && !/^\d{16}$/.test(values.cardNumber)) {
      errors.cardNumberInvalid = true;
    }
  }

  if(!values.name) {
    errors.nameInvalid = true;
  } else if (!/^([a-zA-Z ]){1,50}$/.test(values.name)) {
    errors.nameInvalid = true;
  }

  if (values.email) {
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.emailInvalid = true;
    }
  }

  return errors;
}

export default validateForm;
