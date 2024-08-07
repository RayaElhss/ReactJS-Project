import TourCategories from "./TourCategories";

export default function ExploreTour() {
    return (
        <div className="container-fluid ExploreTour py-5">
            <div className="container py-5">
                <div
                    className="mx-auto text-center mb-5"
                    style={{
                        maxWidth: '900px'
                    }}
                >
                    <h5 className="section-title px-3">
                        Explore Tour
                    </h5>
                    <h1 className="mb-4">
                        The World
                    </h1>
                    <p className="mb-0">
                        Join us as we explore hidden gems, immerse ourselves in diverse cultures,
                        and create unforgettable memories. With TripTales, every journey is a new story waiting to be told.
                        Let us guide you to the world's most captivating locations and turn your travel dreams into reality.
                    </p>
                </div>
                <TourCategories />
            </div>
        </div>
    );
}