import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function TopBar() {
    useEffect(() => {

    }, [])
    return (
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                        <a href="#">
                            <small className="me-3 text-light">
                                <i className="fa fa-user me-2" />
                                Register
                            </small>
                        </a>
                        <a href="#">
                            <small className="me-3 text-light">
                                <i className="fa fa-sign-in-alt me-2" />
                                Login
                            </small>
                        </a>
                        <div className="dropdown">
                            <a
                                href="#"
                                className="dropdown-toggle text-light"
                                data-bs-toggle="dropdown"
                            >
                                <small>
                                    <i className="fa fa-home me-2" /> My Dashboard
                                </small>
                            </a>
                            <div className="dropdown-menu rounded">
                                <a href="/profile" className="dropdown-item">
                                    <i className="fas fa-user-alt me-2" /> My Profile
                                </a>
                                <a href="/logout" className="dropdown-item">
                                    <i className="fas fa-power-off me-2" /> Log Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}