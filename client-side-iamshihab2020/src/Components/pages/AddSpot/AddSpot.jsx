import { MdAddBox } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddSpot = () => {
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const country_name = form.country_name.value;
    const region = form.region.value;
    const short_description = form.short_description.value;
    const avg_cost = form.avg_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const photo_url = form.photo_url.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const addNewTouristSpot = {
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
      user_email,
      user_name,
    };

    fetch(`https://tourism-management-server-main.vercel.app/touristSpots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot data added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .then(() => {
        form.reset();
      });
  };

  return (
    <div className="my-14 px-5 lg:px-10 flex flex-col items-center justify-center gap-10 w-full">
      <Helmet>
        <title>Tour Goo | Add Tourist Spot</title>
      </Helmet>
      <form
        className=" animate__animated  animate__backInDown bg-opacity-25 bg-white bg-blur-lg backdrop-blur-lg backdrop-filter border-4 border-primary p-8 rounded-3xl shadow-lg w-full "
        onSubmit={handleAddSpot}
      >
        <h2 className="font-bold text-3xl lg:text-4xl text-primary text-center mb-8">
          Add Tourist Spot
        </h2>

        <div className=" flex flex-wrap items-center justify-center gap-10 flex-col lg:flex-row  ">
          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Tourist Spot Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full "
              name="tourists_spot_name"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full"
              name="location"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Country Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full"
              name="country_name"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Region</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full"
              name="region"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Short Description</span>
            </div>
            <textarea
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full lg:max-w-xs"
              name="short_description"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Average Cost ($) </span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered border-primary w-full "
              name="avg_cost"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Seasonality</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full "
              name="seasonality"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Travel Time (Days)</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full"
              name="travel_time"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Total Visitors (Per Year)</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered border-primary w-full "
              name="totalVisitorsPerYear"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-primary w-full "
              name="photo_url"
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered border-primary w-full "
              name="user_email"
              required
            />
          </label>

          <label className="form-control w-full lg:max-w-xs">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              type="Name"
              placeholder="Type here"
              className="input input-bordered border-primary w-full"
              name="user_name"
              required
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-10 text-white rounded-2xl"
          >
            <MdAddBox /> Add Tourist Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSpot;
