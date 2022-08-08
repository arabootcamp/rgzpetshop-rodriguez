import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value.trim(),
    });
  };

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  //Si lo llama BuyerForm es el Proceso batch para actualizar stock de producto y generar orden de compra
  const handleSubmit = (e, customRequest) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setResponse({});
      setLoading(true);
      customRequest()
        .then(res => setResponse(res))
        .catch (err => setResponse({status: "fail", message: "Error inesperado ..."}))
        .finally(()=> setLoading(false))
    }
  };

  return (
    {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit
    });
}