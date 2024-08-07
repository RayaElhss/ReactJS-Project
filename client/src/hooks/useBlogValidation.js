import { useState } from 'react';

export function useBlogValidation() {
    const [fieldErrors, setFieldErrors] = useState({});

    const validateFields = (fields) => {
        const errors = {};

        for (const [field, value] of Object.entries(fields)) {
            if (field === 'title') {
                if (!value) {
                    errors[field] = 'Title is required.';
                } else if (value.length < 5) {
                    errors[field] = 'Title must be at least 5 characters.';
                }
            } else if (field === 'imageUrl') {
                const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
                if (!value) {
                    errors[field] = 'Image URL is required.';
                } else if (!urlPattern.test(value)) {
                    errors[field] = 'Image URL is invalid.';
                }
            } else if (field === 'description') {
                if (!value) {
                    errors[field] = 'Description is required.';
                } else if (value.length < 10) {
                    errors[field] = 'Description must be at least 10 characters.';
                }
            }
        }

        setFieldErrors(errors);
        return errors;
    };

    return { fieldErrors, validateFields };
}
