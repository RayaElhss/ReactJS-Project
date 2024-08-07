import { useEffect, useState } from "react";

export default function useSearch(packages) {
    const [query, setQuery] = useState('');
    const [filteredPackages, setFilteredPackages] = useState(packages);

    useEffect(() => {
        const lowercasedQuery = query.toLowerCase();

        const newFilteredPackages = packages.filter(
            (pkg) =>
                pkg.country.toLowerCase().includes(lowercasedQuery) ||
                pkg.city.toLowerCase().includes(lowercasedQuery)
        );

        setFilteredPackages(newFilteredPackages);
    }, [query, packages]);

    return {
        query,
        setQuery,
        filteredPackages
    };
}