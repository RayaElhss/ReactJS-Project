// import useSearch from '../../hooks/useSearch';
// import styles from './Search.module.css';


// export default function Search() {
//     const { query, setQuery, filteredPackages } = useSearch(packages);

//     const handleInputChange = (event) => {
//         setQuery(event.target.value);
//     };

//     return (
//         <div
//             className={`container-fluid ${styles.containerFluid}`}>
//             <div className="container">
//                 <div
//                     className={`position-relative w-100 mx-auto ${styles.searchBar}`}>
//                     <input
//                         className={`form-control ${styles.searchInput}`}
//                         placeholder="Eg: Thailand"
//                         type="text"
//                         value={query}
//                         onChange={handleInputChange}
//                     />
//                     <button
//                         className={`btn btn-primary ${styles.searchButton}`}
//                         type="button"
//                     >
//                         Search
//                     </button>
//                 </div>
//                 <div className="mt-4">
//                     {filteredPackages.length > 0 ? (
//                         <ul>
//                             {filteredPackages.map(pkg => (
//                                 <li key={pkg._id}>
//                                     <h3>{pkg.country} - {pkg.city}</h3>
//                                     <p>{pkg.description}</p>
//                                     <p>Duration: {pkg.duration} days</p>
//                                     <p>People: {pkg.peopleCount}</p>
//                                     <p>Price: ${pkg.price}</p>
//                                     <img src={pkg.imageUrl} alt={`${pkg.city}, ${pkg.country}`} />
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No packages found.</p>
//                     )}
//                 </div>
//             </div>
//         </div>

//     );
// }