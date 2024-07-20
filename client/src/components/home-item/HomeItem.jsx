export default function HomeItem() {
    return (
        <div
            className="container-fluid search-bar position-relative"
            style={{
                top: '-50%',
                transform: 'translateY(-50%)'
            }}
        >
            <div className="container">
                <div
                    className="position-relative rounded-pill w-100 mx-auto p-5"
                    style={{
                        background: 'rgba(19, 53, 123, 0.8)'
                    }}
                >
                    <input
                        className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                        placeholder="Eg: Thailand"
                        type="text"
                    />
                    <button
                        className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2"
                        style={{
                            right: '46px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                        type="button"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}