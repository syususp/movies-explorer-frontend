import React, { useCallback } from 'react';

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(String(email).toLowerCase());
}

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });

    const currentErrors = {
      ...errors,
      [name]:
        (name === 'email' && !validateEmail(value)) ||
        (name === 'name' && value.trim() === '')
          ? 'Поле не может быть пустым'
          : name === 'email' && !validateEmail(value)
          ? 'Неверный формат электронной почты'
          : target.validationMessage,
    };

    setErrors(currentErrors);

    const allValid = Object.values(currentErrors).every((error) => !error);
    setIsValid(allValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setErrors,
    setIsValid,
  };
}
