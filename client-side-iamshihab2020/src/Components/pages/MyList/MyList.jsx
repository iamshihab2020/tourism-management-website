import { useState, useEffect, useContext } from "react";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import HashLoader from "react-spinners/HashLoader";
import MyListCard from "./MyListCard";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [userTouristSpots, setUserTouristSpots] = useState([]);

  const fetchData = () => {
    if (user) {
      fetch(
        `https://tourism-management-server-main.vercel.app/touristSpots/user/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserTouristSpots(data);
          setLoading(false);
        })
        .catch((error) =>
          console.log("Error fetching user's tourist spots:", error)
        );
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleDelete = (deletedSpotId) => {
    setUserTouristSpots(
      userTouristSpots.filter((spot) => spot._id !== deletedSpotId)
    );
  };

  return (
    <div className=" px-3 md:px-5 lg:px-10  pb-14 mt-5 min-h-screen">
      <Helmet>
        <title>Tour Goo | My List</title>
      </Helmet>
      <div className="animate__animated animate__backInLeft">
        <SectionHeader prop={"My Tourist Spots"} />
      </div>
      {loading ? (
        <div className="flex items-center justify-center my-12">
          <HashLoader color="#38BDF8" />
        </div>
      ) : (
        <div className="animate__animated animate__zoomIn  pb-12">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Spot Name</th>
                  <th>Country</th>
                  <th>Average Cost</th>
                  <th>Visitor Per Year</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userTouristSpots.map((touristSpot) => (
                  <MyListCard
                    key={touristSpot._id}
                    touristSpot={touristSpot}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyList;
