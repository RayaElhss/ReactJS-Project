export default function Register() {
    return (
        <section
            className="vh-100 bg-image"
            style={{
                backgroundImage: 'url(\'https://th.bing.com/th/id/OIP.Ig-xuws5-s8__YwXXIUo5AHaEo?rs=1&pid=ImgDetMain\')'
            }}
        >

            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div
                                className="card"
                                style={{
                                    borderRadius: '15px'
                                }}
                            >
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        Login here
                                    </h2>
                                    <form>
                                        <div
                                            className="form-outline mb-4"
                                            data-mdb-input-init=""
                                        >
                                            <input
                                                className="form-control form-control-lg"
                                                id="form3Example3cg"
                                                type="email"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example3cg"
                                            >
                                                Your Email
                                            </label>
                                        </div>
                                        <div
                                            className="form-outline mb-4"
                                            data-mdb-input-init=""
                                        >
                                            <input
                                                className="form-control form-control-lg"
                                                id="form3Example4cg"
                                                type="password"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example4cg"
                                            >
                                                Password
                                            </label>
                                        </div>
                                        
                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                data-mdb-button-init=""
                                                data-mdb-ripple-init=""
                                                type="button"
                                            >
                                                login
                                            </button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">
                                            Don't have an account?{' '}
                                            <a
                                                className="fw-bold text-body"
                                                href="/register"
                                            >
                                                <u>
                                                    Register here
                                                </u>
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
