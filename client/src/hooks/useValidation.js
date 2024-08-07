import { useState } from 'react';

export function useValidation(validationRules) {
    const [fieldErrors, setFieldErrors] = useState({});

    const validateFields = (fields) => {
        const errors = {};

        for (const [field, value] of Object.entries(fields)) {
            if (validationRules[field]) {
                const rule = validationRules[field];
                if (rule.required && !value) {
                    errors[field] = `${field} is required.`;
                } else if (rule.minLength && value.length < rule.minLength) {
                    errors[field] = `${field} must be at least ${rule.minLength} characters.`;
                } else if (rule.pattern && !rule.pattern.test(value)) {
                    errors[field] = `${field} is invalid.`;
                }
            }
        }

        setFieldErrors(errors);
        return errors;
    };

    return { fieldErrors, validateFields };
}