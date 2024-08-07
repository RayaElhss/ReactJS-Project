import { useEffect, useState } from "react";
import { getAllTourCategories } from "../../api/tourCategories-api";
import TourItem from "./TourItem";

export default function TourCategories() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllTourCategories();
                console.log("Fetched tours:", result); // Log the fetched data
                setTours(result);
            } catch (err) {
                console.error("Error fetching tours:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading tours: {error.message}</div>;
    }

    return (
        <div className="tab-class text-center">
            <div className="tab-content">
                <div className="tab-pane fade show p-0 active" id="NationalTab-1">
                    <div className="row g-4">
                        {tours.map(tour => (
                            <TourItem key={tour._id} {...tour} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}