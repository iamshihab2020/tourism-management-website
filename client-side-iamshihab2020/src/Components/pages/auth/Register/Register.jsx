// Register.jsx
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import Toast from "../../../shared/Toast/Toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const [toast, setToast] = useState(null);

  const showToast = (message, isSuccess) => {
    setToast({ message, isSuccess });
    setTimeout(() => {
      setToast(null);
      navigate("/", { replace: true });
      window.location.reload();
    }, 2900);
  };

  const { createUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const { email, password, photoURL, displayName } = data;
      const user = await createUser(email, password, displayName, photoURL);
      console.log(user);
      reset();
      showToast("Your account has been created. Redirecting to Home...", true);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        showToast("Email is already in use.", false);
      } else {
        showToast("An error occurred. Please try again later.", false);
      }
    }
  };

  return (
    <div className="animate__animated  animate__fadeInRight flex items-center justify-center py-0 md:py-16 lg:py-16 px-0  md:px-16 lg:px-16 ">
      <Helmet>
        <title>Tour Goo | Register</title>
      </Helmet>
      {toast && <Toast message={toast.message} isSuccess={toast.isSuccess} />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate__animated animate__fadeInBottomLeft w-96 py-10 px-10 rounded-3xl flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg bg-opacity-20 shadow-lg border-[#42A7C3] border-2"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#42A7C3]">Registration</h1>
        </div>

        <div className="w-full">
          <label className="form-control w-full min-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              className="input  border-black border-spacing-3 border-2 w-full min-w-xs"
              placeholder="Enter person name"
              {...register("displayName", { required: true })}
            />
          </label>
          <p className="text-error font-bold">
            {errors.name?.type === "required" && "Name is required"}
          </p>
        </div>

        <div className="w-full">
          <label className="form-control w-full min-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              className="input  border-black border-spacing-3 border-2 w-full min-w-xs"
              placeholder="Enter primary email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
          </label>

          <p className="text-error font-semibold">
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </p>
        </div>

        <div className="w-full">
          <label className="form-control w-full min-w-xs">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input  border-black border-spacing-3 border-2 w-full min-w-xs"
              {...register("photoURL")}
            />
          </label>
          <p className="text-error font-semibold">
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </p>
        </div>

        <div className="w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input  border-black border-spacing-3 border-2 w-full min-w-xs"
              placeholder="Enter password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, // Regex for password validation
              })}
            />
          </div>
          <p className="text-error font-semibold">
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" &&
              "Password should be at least 6 characters"}
            {errors.password?.type === "maxLength" &&
              "Password should be at most 20 characters"}
            {errors.password?.type === "pattern" &&
              "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long"}
          </p>
        </div>

        <label className="label">
          <p className="label-text-alt ">
            Already have account?{" "}
            <Link
              to={`/login`}
              className="link link-hover text-[#42A7C3] font-bold"
            >
              Log In
            </Link>
          </p>
        </label>

        <div className="w-full">
          <input
            className="btn bg-[#42A7C3] text-white w-full"
            type="submit"
            value={`Register`}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
