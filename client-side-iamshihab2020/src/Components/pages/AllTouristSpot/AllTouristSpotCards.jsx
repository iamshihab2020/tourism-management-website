import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet-async";

const AllTouristSpotCards = ({ touristSpot }) => {
  const {
    _id,
    tourists_spot_name,
    avg_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    photo_url,

  } = touristSpot;

  let formattedTotalVisitorsPerYear = new Intl.NumberFormat().format(
    totalVisitorsPerYear
  );

  return (
    <>
      <Helmet>
        <title>Tour Goo | All Tourist</title>
      </Helmet>
      <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-primary duration-200 transition-transform hover:translate-y-3 ">
        <figure>
          <img
            src={photo_url}
            className="h-56 w-full object-cover"
            alt={`Photo of ${tourists_spot_name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>

          <p>
            Average Cost:
            <div className="ml-1 badge badge-primary">{avg_cost}$</div>
          </p>

          <p>
            Total Visitor (Per Year):
            <div className="ml-1 badge badge-primary">
              {formattedTotalVisitorsPerYear}
            </div>
          </p>

          <p>
            Travel Time (Days):
            <div className="ml-1 badge badge-primary">{travel_time}</div>
          </p>

          <p>
            Seasonality:
            <div className="ml-1 badge badge-primary">{seasonality}</div>
          </p>

          <div className="card-actions justify-end">
            <a
              data-tooltip-id="tooltip-anchor-hide"
              data-tooltip-content="Click to see more about this spot"
              // data-tooltip-delay-hide={1000}
            >
              <Link to={`/tourist-spot-details/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </a>
            <Tooltip id="tooltip-anchor-hide" />
          </div>
        </div>
      </div>
    </>
  );
};

AllTouristSpotCards.propTypes = {
  touristSpot: PropTypes.object.isRequired,
};

export default AllTouristSpotCards;
