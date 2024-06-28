import { useLoaderData, useParams } from "react-router-dom";
import { LuGalleryThumbnails } from "react-icons/lu";
import { FaMapLocation } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCloudSunRain } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaPeopleRobbery } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const TouristSpotDetails = () => {
  const allTouristSpots = useLoaderData();
  const { id } = useParams();

  const touristData = allTouristSpots.find(
    (touristSpot) => touristSpot._id === id
  );

  const {
    tourists_spot_name,
    location,
    country_name,
    region,
    short_description,
    avg_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    photo_url,
    user_name
  } = touristData;

  let formattedTotalVisitorsPerYear = new Intl.NumberFormat().format(
    totalVisitorsPerYear
  );

  return (
    <div className="pb-20 px-3 md:px-7 lg:px-10 w-full flex flex-col items-center justify-center gap-10 animate__animated animate__backInDown">
      <Helmet>
        <title>Tour Goo | Tourist Spot Details</title>
      </Helmet>
      <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold pt-10 mt-5 text-center">
        {tourists_spot_name}
      </h1>

      <div className="px-3 md:px-7 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-y-3 md:gap-x-14 lg:gap-x-10 flex-wrap text-base md:text-lg lg:text-xl">
        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <LuGalleryThumbnails /> Name:{" "}
            </b>{" "}
            {tourists_spot_name}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <FaMapLocation />
              Location:{" "}
            </b>{" "}
            {location}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <FaFlag />
              Country:{" "}
            </b>{" "}
            {country_name}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <BiWorld />
              Region:{" "}
            </b>{" "}
            {region}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <MdDescription />
              Description:{" "}
            </b>{" "}
            {short_description}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <FaPeopleRobbery />
              Visitor Per Year:{" "}
            </b>{" "}
            {formattedTotalVisitorsPerYear}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <RiMoneyDollarCircleFill />
              Average Cost:{" "}
            </b>{" "}
            {avg_cost} $
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <FaCloudSunRain />
              Seasonality{" "}
            </b>{" "}
            {seasonality}
          </p>
        </div>

        <div>
          <p className="flex items-start gap-2">
            <b className="flex items-center gap-1 text-primary">
              <FaRegCalendarDays />
              Travel Time:{" "}
            </b>{" "}
            {travel_time} days
          </p>
        </div>
      </div>

      <div className="w-full object-cover">
        <img
          src={photo_url}
          alt={`Photo of ${tourists_spot_name}`}
          className=" object-cover w-full max-h-screen rounded-3xl"
        />
      </div>

      <div>
        <p>Added By : {user_name}</p>
      </div>
      <div>
        <Link to={"/"}>
          <button className="btn btn-primary">
            <MdOutlineArrowBack />
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
