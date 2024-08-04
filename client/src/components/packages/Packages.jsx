import React, { useEffect, useState } from 'react';
import * as packagesAPI from '../../api/packages-api';
import PackageItem from './package-items/PackageItems';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    packagesAPI.getAllPackages().then(result => setPackages(result));
  }, []);

  // Determine if we're on the homepage
  const isHomePage = location.pathname === '/';

  const handleViewAllClick = () => {
    navigate('/allPackages'); // Navigate to the "All Packages" page
  };

  return (
    <div className="container-fluid packages py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">Packages</h5>
          <h1 className="mb-0">Awesome Packages</h1>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between">

          {packages.length > 0 ? (
            (isHomePage ? packages.slice(0, 6) : packages).map((packageDeal) => (
              <PackageItem key={packageDeal._id} {...packageDeal} />
            ))
          ) : (
            <h3>No any upcoming packages yet!</h3>
          )}
        </div>
      </div>

      {isHomePage && (
        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleViewAllClick} // Navigate to view all packages
          >
            View All Packages
          </button>
        </div>
      )}
    </div>
  );
}
