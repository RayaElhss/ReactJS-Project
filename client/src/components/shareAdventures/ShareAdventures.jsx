export default function ShareAdventures() {
    return (
        <div className="container-fluid booking py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h5 className="section-booking-title pe-3">
                            Share
                        </h5>
                        <h1 className="text-white mb-4">
                            Share with us your experience!
                        </h1>
                        <p className="text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime                    ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium?                    Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <p className="text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime                    ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium?                    Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <a
                            className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2"
                            href="#"
                        >
                            Read More
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="text-white mb-3">
                            Book A Tour Deals
                        </h1>
                        <p className="text-white mb-4">
                            Get{' '}
                            <span className="text-warning">
                                50% Off
                            </span>
                            {' '}On Your First Adventure Trip                    With Travela. Get More Deal Offers Here.
                        </p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            className="form-control bg-white border-0"
                                            id="name"
                                            placeholder="Your Name"
                                            type="text"
                                        />
                                        <label htmlFor="name">
                                            Your Name
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            className="form-control bg-white border-0"
                                            id="email"
                                            placeholder="Your Email"
                                            type="email"
                                        />
                                        <label htmlFor="email">
                                            Your Email
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="form-floating date"
                                        data-target-input="nearest"
                                        id="date3"
                                    >
                                        <input
                                            className="form-control bg-white border-0"
                                            data-target="#date3"
                                            data-toggle="datetimepicker"
                                            id="datetime"
                                            placeholder="Date & Time"
                                            type="text"
                                        />
                                        <label htmlFor="datetime">
                                            Date & Time
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select
                                            className="form-select bg-white border-0"
                                            id="select1"
                                        >
                                            <option value="1">
                                                Destination 1
                                            </option>
                                            <option value="2">
                                                Destination 2
                                            </option>
                                            <option value="3">
                                                Destination 3
                                            </option>
                                        </select>
                                        <label htmlFor="select1">
                                            Destination
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select
                                            className="form-select bg-white border-0"
                                            id="SelectPerson"
                                        >
                                            <option value="1">
                                                Persons 1
                                            </option>
                                            <option value="2">
                                                Persons 2
                                            </option>
                                            <option value="3">
                                                Persons 3
                                            </option>
                                        </select>
                                        <label htmlFor="SelectPerson">
                                            Persons
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select
                                            className="form-select bg-white border-0"
                                            id="CategoriesSelect"
                                        >
                                            <option value="1">
                                                Kids
                                            </option>
                                            <option value="2">
                                                1
                                            </option>
                                            <option value="3">
                                                2
                                            </option>
                                            <option value="3">
                                                3
                                            </option>
                                        </select>
                                        <label htmlFor="CategoriesSelect">
                                            Categories
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control bg-white border-0"
                                            id="message"
                                            placeholder="Special Request"
                                            style={{
                                                height: '100px'
                                            }}
                                        />
                                        <label htmlFor="message">
                                            Special Request
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button
                                        className="btn btn-primary text-white w-100 py-3"
                                        type="submit"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}           