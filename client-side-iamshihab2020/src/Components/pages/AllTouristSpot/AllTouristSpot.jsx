import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import AllTouristSpotCards from "./AllTouristSpotCards";

import HashLoader from "react-spinners/HashLoader";

const AllTouristSpot = () => {
  const [loading, setLoading] = useState(true);
  const allTouristSpots = useLoaderData();
  const [visibleCards, setVisibleCards] = useState(9);

  const handleViewMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 9);
  };

  const handleDataLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      handleDataLoaded();
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-5 lg:px-10  pb-14 mt-5">
      <div className="animate__animated animate__backInRight">
        <SectionHeader prop={"All Tourist Spots"} />
      </div>
      {loading ? (
        // Show DaisyUI loader while loading
        <div className="flex items-center justify-center my-12">
          <HashLoader color="#38BDF8" />
        </div>
      ) : (
        <div className="animate__animated animate__zoomIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 w-full justify-items-center pb-12">
          {allTouristSpots.slice(0, visibleCards).map((touristSpot) => (
            <AllTouristSpotCards
              key={touristSpot._id}
              touristSpot={touristSpot}
            />
          ))}
        </div>
      )}
      {visibleCards < allTouristSpots.length && !loading && (
        <button className="btn btn-primary" onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default AllTouristSpot;
