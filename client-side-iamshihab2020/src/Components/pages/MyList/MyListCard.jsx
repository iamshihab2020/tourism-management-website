import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const MyListCard = ({ touristSpot, onDelete }) => {
  const {
    _id,
    tourists_spot_name,
    country_name,
    avg_cost,
    totalVisitorsPerYear,
  } = touristSpot;

  let formattedTotalVisitorsPerYear = new Intl.NumberFormat().format(
    totalVisitorsPerYear
  );

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tourism-management-server-main.vercel.app/touristSpots/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "This Tourist Spot data has been deleted.",
                icon: "success",
              });
              onDelete(_id); // Update state in parent component
            }
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
          });
      }
    });
  };

  return (
    <tr>
      <td>{tourists_spot_name}</td>
      <td>{country_name}</td>
      <td>{avg_cost} $</td>
      <td>{formattedTotalVisitorsPerYear}</td>
      <td>
        <a
          data-tooltip-id="tooltip-anchor-hide"
          data-tooltip-content="Delete this data"
          // data-tooltip-delay-hide={1000}
        >
          <Link to={`/update-spot/${_id}`}>
            <button className="btn btn-success text-white btn-xs">
              <GrUpdate />
            </button>
          </Link>
        </a>
        <Tooltip id="tooltip-anchor-hide" />
      </td>
      <td>
        <a
          data-tooltip-id="tooltip-anchor-hide"
          data-tooltip-content="Update this data"
          // data-tooltip-delay-hide={1000}
        >
          <button
            className="btn btn-error text-white btn-xs"
            onClick={handleDelete}
          >
            <FaRegTrashAlt />
          </button>
        </a>
        <Tooltip id="tooltip-anchor-hide" />
      </td>
    </tr>
  );
};

MyListCard.propTypes = {
  touristSpot: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MyListCard;
