import { useEffect, useState } from "react";
import { getAllTours } from "../api/tours-api";
import { getAllTourCategories } from "../api/tourCategories-api";

export default function useTours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTours = async () => {
            try {
                const toursData = await getAllTourCategories();
                console.log('Fetched Tours:', toursData);
                setTours(toursData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        loadTours();
    }, []);

    return { tours, loading, error };

};

