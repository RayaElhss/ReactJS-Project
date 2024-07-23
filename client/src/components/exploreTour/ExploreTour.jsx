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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto                doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti                eum cum repellat a laborum quasi.
                    </p>
                </div>
                <TourCategories />
            </div>
        </div>
    );
}