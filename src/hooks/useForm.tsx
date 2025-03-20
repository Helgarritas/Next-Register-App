import React, { useState, useCallback } from 'react';

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    })); 
  }, [])
  
  const onResetForm = useCallback(() => {
    setFormState(initialForm);
  }, [])

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
