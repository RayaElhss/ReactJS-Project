import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { getAllPackages } from '../../api/packages-api';
import PackageItem from '../packages/package-items/PackageItems';


export default function Search() {
    const [packages, setPackages] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredPackages, setFilteredPackages] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const data = await getAllPackages();
                setPackages(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPackages();
    }, []);

    useEffect(() => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = packages.filter(
            (pkg) =>
                pkg.country.toLowerCase().includes(lowercasedQuery) ||
                pkg.city.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredPackages(filtered);
    }, [query, packages]);



    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div
            className={`container-fluid ${styles.containerFluid}`}>
            <div className="container py-5">
                <div
                    className={`position-relative w-100 mx-auto ${styles.searchBar}`}>
                    <input
                        className={`form-control ${styles.searchInput}`}
                        placeholder="Eg: Thailand"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button
                        className={`btn btn-primary ${styles.searchButton}`}
                        type="button"
                    >
                        Search
                    </button>
                </div>
                <div className="mt-4">
                    {filteredPackages.length > 0 ? (
                        <div className="row">
                            {filteredPackages.map((pkg) => (
                                <div className="col-md-4 mb-4" key={pkg._id}>
                                    <PackageItem
                                        _id={pkg._id}
                                        country={pkg.country}
                                        city={pkg.city}
                                        imageUrl={pkg.imageUrl}
                                        duration={pkg.duration}
                                        peopleCount={pkg.peopleCount}
                                        price={pkg.price}
                                        description={pkg.description}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No packages found.</p>
                    )}
                </div>
            </div>
        </div>

    );
}