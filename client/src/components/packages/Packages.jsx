import React, { useEffect, useState } from 'react';
import * as packagesAPI from '../../api/packages-api';
import PackageItem from './package-items/PackageItems';

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    packagesAPI.getAllPackages().then(result => setPackages(result));
  }, []);

  return (
    <div className="container-fluid packages py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">Packages</h5>
          <h1 className="mb-0">Awesome Packages</h1>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between">
          {packages.map(packageDeal => (
            <PackageItem key={packageDeal._id} {...packageDeal} />
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-primary">View All Packages</button>
      </div>
    </div>
  );
}
