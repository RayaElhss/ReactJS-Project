// import Search from "../search/Search";

import About from "../about/About";
import ExploreTour from "../exploreTour/ExploreTour";
import Gallery from "../gallery/Gallery";
import Blog from "../blog/Blog";
import Packages from "../packages/Packages";
import Testimonials from "../testimonials/Testimonials";
import TravelGuide from "../travelGuide/TravelGuide";
import CreateBlog from "../blog-form/create-blog/CreateBlog";

export default function Home() {
    return (
        <>



            <div className="carousel-header">
                <div
                    className="carousel slide"
                    data-bs-ride="carousel"
                    id="carouselId"
                >
                    <ol className="carousel-indicators">
                        <li
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carouselId"
                        />
                        <li
                            data-bs-slide-to="1"
                            data-bs-target="#carouselId"
                        />
                        <li
                            data-bs-slide-to="2"
                            data-bs-target="#carouselId"
                        />
                    </ol>
                    <div
                        className="carousel-inner"
                        role="listbox"
                    >
                        <div className="carousel-item active">
                            <img
                                alt="Image"
                                className="img-fluid"
                                src="img/carousel-2.jpg"
                            />
                            <div className="carousel-caption">
                                <div
                                    className="p-3"
                                    style={{
                                        maxWidth: '900px'
                                    }}
                                >
                                    <h4
                                        className="text-white text-uppercase fw-bold mb-4"
                                        style={{
                                            letterSpacing: '3px'
                                        }}
                                    >
                                        Explore The World
                                    </h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">
                                        Let's The World Together!
                                    </h1>
                                    <p className="mb-5 fs-5">
                                        Welcome to TripTales, your gateway to incredible adventures and unforgettable experiences!
                                        Whether you're planning a relaxing beach vacation, a thrilling mountain trek, or an immersive
                                        cultural journey, we're here to help you make it happen.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                alt="Image"
                                className="img-fluid"
                                src="img/carousel-1.jpg"
                            />
                            <div className="carousel-caption">
                                <div
                                    className="p-3"
                                    style={{
                                        maxWidth: '900px'
                                    }}
                                >
                                    <h4
                                        className="text-white text-uppercase fw-bold mb-4"
                                        style={{
                                            letterSpacing: '3px'
                                        }}
                                    >
                                        Explore The World
                                    </h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">
                                        Find Your Perfect Tour At Travel
                                    </h1>
                                    <p className="mb-5 fs-5">
                                        At TripTales, we believe that travel is not just about reaching a destination,
                                        but about the stories you create along the way. With our carefully curated travel
                                        packages, insider tips, and passionate guides, we aim to make your travel dreams a reality.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                alt="Image"
                                className="img-fluid"
                                src="img/carousel-3.jpg"
                            />
                            <div className="carousel-caption">
                                <div
                                    className="p-3"
                                    style={{
                                        maxWidth: '900px'
                                    }}
                                >
                                    <h4
                                        className="text-white text-uppercase fw-bold mb-4"
                                        style={{
                                            letterSpacing: '3px'
                                        }}
                                    >
                                        Explore The World
                                    </h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">
                                        Have Fun!
                                    </h1>
                                    <p className="mb-5 fs-5">
                                        Explore breathtaking destinations, indulge in local cuisines, and uncover hidden
                                        gems with our expertly crafted itineraries. Join us as we embark on adventures that
                                        inspire, educate, and transform the way you see the world.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        data-bs-slide="prev"
                        data-bs-target="#carouselId"
                        type="button"
                    >
                        <span
                            aria-hidden="false"
                            className="carousel-control-prev-icon btn bg-primary"
                        />
                        <span className="visually-hidden">
                            Previous
                        </span>
                    </button>
                    <button
                        className="carousel-control-next"
                        data-bs-slide="next"
                        data-bs-target="#carouselId"
                        type="button"
                    >
                        <span
                            aria-hidden="false"
                            className="carousel-control-next-icon btn bg-primary"
                        />
                        <span className="visually-hidden">
                            Next
                        </span>
                    </button>
                </div>

            </div>

            {/* <Search /> */}


            <About />
            <ExploreTour />
            <Packages /> {/* Homepage showing only 6 packages */}
            <Gallery />
            <TravelGuide />
            <Blog />
            <Testimonials />

        </>
    );
}