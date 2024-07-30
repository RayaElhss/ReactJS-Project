import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { name: '', email: '', password: '', rePassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ name, email, password, rePassword }) => {
        if (password !== rePassword) {
            setError('Passwords don\'t match!');
            return;
        }

        try {
            await register(name, email, password);

            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler);

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
                                        Create an account
                                    </h2>

                                    {/* {error && (
                                        <div className="alert alert-danger text-center" role="alert">
                                            {error}
                                        </div>
                                    )} */}

                                    <form onSubmit={submitHandler}>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example1cg"
                                        >
                                            Username:
                                        </label>
                                        <div
                                            className="form-outline mb-4"
                                            data-mdb-input-init=""
                                        >
                                            <input
                                                className="form-control form-control-lg"
                                                id="form3Example1cg"
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={changeHandler}
                                                placeholder="Emily"

                                            />

                                        </div>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example3cg"
                                        >
                                            Email:
                                        </label>
                                        <div
                                            className="form-outline mb-4"
                                            data-mdb-input-init=""
                                        >
                                            <input
                                                className="form-control form-control-lg"
                                                id="form3Example3cg"
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={changeHandler}
                                                placeholder="emily@gmail.com"
                                            />

                                        </div>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example4cg"
                                        >
                                            Password:
                                        </label>
                                        <div
                                            className="form-outline mb-4"
                                            data-mdb-input-init=""
                                        >
                                            <input
                                                className="form-control form-control-lg"
                                                id="form3Example4cg"
                                                type="password"
                                                name="password"
                                                value={values.password}
                                                onChange={changeHandler}
                                            />

                                        </div>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example4cdg"
                                        >
                                            Repeat your password:
                                        </label>
                                        <div
                                            className="form-outline mb-4"
                                            data-mdb-input-init=""
                                        >
                                            <input
                                                className="form-control form-control-lg"
                                                id="form3Example4cdg"
                                                type="password"
                                                name="rePassword"
                                                value={values.rePassword}
                                                onChange={changeHandler}
                                            />

                                        </div>

                                   


                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                data-mdb-button-init=""
                                                data-mdb-ripple-init=""
                                                type="submit"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">
                                            Have already an account?{' '}
                                            <a
                                                className="fw-bold text-body"
                                                href="/login"
                                            >
                                                <u>
                                                    Login here
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
