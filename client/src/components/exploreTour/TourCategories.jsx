import { useEffect, useState } from "react";
import { getAllTours } from "../../api/tourCategories-api";
import TourItem from "./TourItem";

export default function TourCategories() {
    const [tours, setTours] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(() => {
        getAllTours().then(result => setTours(result));
    }, []);

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