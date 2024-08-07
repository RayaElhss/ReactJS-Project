import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


export default function TopBar() {
    const { isAuthenticated } = useAuthContext();

    return (
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                        {isAuthenticated ? (
                            <div className="dropdown">

                            </div>
                        ) : (
                            <div className="d-inline-flex align-items-center">
                                <Link to="/register">
                                    <small className="me-3 text-light">
                                        <i className="fa fa-user me-2" />
                                        Register
                                    </small>
                                </Link>
                                <Link to="/login">
                                    <small className="me-3 text-light">
                                        <i className="fa fa-sign-in-alt me-2" />
                                        Login
                                    </small>
                                </Link>
                                <div className="dropdown">

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}