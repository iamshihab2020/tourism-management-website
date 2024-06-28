import SectionHeader from "../../../shared/SectionHeader/SectionHeader";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import TouristSpotCards from "./TouristSpotCards";
import { Link } from "react-router-dom";

const TouristSpots = () => {
  const [loading, setLoading] = useState(true);
  const [allTouristSpots, setAllTouristSpots] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://tourism-management-server-main.vercel.app/touristSpots"
      );
      const data = await response.json();
      setAllTouristSpots(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-5 lg:px-10 pb-14">
      <div className=" mb-10">
        <SectionHeader prop={"Best Tourist Spots"} />
      </div>
      {loading ? (
        <div className="flex items-center justify-center my-12">
          <HashLoader color="#38BDF8" />
        </div>
      ) : allTouristSpots && allTouristSpots.length > 0 ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 w-full justify-items-center pb-12">
          {allTouristSpots.slice(0, 6).map((touristSpot) => (
            <TouristSpotCards key={touristSpot._id} touristSpot={touristSpot} />
          ))}
        </div>
      ) : (
        <p className="text-error">
          Error Fetching Data. Try to Reload the page
        </p>
      )}
      <div>
        <Link to={`/tourist-spot`}>
          <button className="btn btn-primary">Discover More</button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpots;
