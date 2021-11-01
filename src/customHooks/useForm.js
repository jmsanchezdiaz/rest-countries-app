import { useState } from "react";

const useForm = (initState) => {
  const [formValues, setFormValues] = useState(initState);

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const resetForm = () => setFormValues(initState);

  return { formValues, ...formValues, handleChange, resetForm };
};

export default useForm;
