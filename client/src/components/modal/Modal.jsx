export default function Modal() {
    return (
        <div>
            <button
                className="btn btn-primary"
                data-target="#exampleModalCenter"
                data-toggle="modal"
                type="button"
            >
                Book now
            </button>
            <div
                aria-hidden="true"
                aria-labelledby="exampleModalCenterTitle"
                className="modal fade"
                id="exampleModalCenter"
                role="dialog"
                tabIndex="-1"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h5
                                className="modal-title"
                                id="exampleModalCenterTitle"
                            >
                                Book now
                            </h5>
                            <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                            >
                                <span aria-hidden="true">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p style={{ fontSize: '1.25rem', fontFamily: 'cursive' }}>Send us an email! <br /> <span style={{ color: '#FF5733' }}>tripTales@gmail.com</span></p>
                        </div>
                        <div className="modal-footer">
                           
                            <button
                                className="btn btn-primary close"
                                type="button"
                                data-dismiss="modal"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}