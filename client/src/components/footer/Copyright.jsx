import styles from './Copyright.module.css';

export default function Copyright() {
    return (
        <div className={`container-fluid ${styles.copyright} text-body py-4`}>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-end mb-md-0">
                        <i className="fas fa-copyright me-2" />
                        <a className="text-white" href="#">
                            Your Site Name
                        </a>
                        , All rights reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        Designed By{' '}
                        <a className="text-white" href="https://htmlcodex.com">
                            HTML Codex
                        </a>
                        {' '}Distributed By{' '}
                        <a href="https://themewagon.com">
                            ThemeWagon
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
