import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : initialState;
    });

    const updateState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    };

    return [state, updateState];
}