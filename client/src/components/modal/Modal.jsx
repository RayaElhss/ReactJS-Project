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
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalCenterTitle"
                            >
                                Modal title
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
                            ...
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                type="button"
                            >
                                Close
                            </button>
                            <button
                                className="btn btn-primary"
                                type="button"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}