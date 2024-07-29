import { useEffect, useState } from "react";

export default function useSearch(packages) {
    const [query, setQuery] = useState('');
    const [filteredPackages, setFilteredPackages] = useState(Object.values(packages));

    useEffect(() => {
        const newFilteredPackages = Object.values(packages).filter(pkg => pkg.country.toLowerCase().includes(query.toLowerCase()) || pkg.city.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPackages(newFilteredPackages);
    }, [query, packages]);

    return {
        query,
        setQuery,
        filteredPackages
    };
}