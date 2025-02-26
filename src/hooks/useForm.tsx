import React, { useState, useCallback } from 'react';

interface FormState {
    [key: string]: string;
}

export const useForm = (initialForm: FormState = {}) => {
    const [formState, setFormState] = useState<FormState>(initialForm);

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
