import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import Toast from "../../../shared/Toast/Toast";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const { signInUser, handleGoogleSignIn, handleGithubSignIn } =
    useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const showToast = (message, isSuccess) => {
    setToast({ message, isSuccess });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInUser(email, password);
      showToast(`You have been successfully logged in. Redirecting...`, true);
      setTimeout(() => {
        navigate("/", { replace: true });
        window.location.reload();
      }, 4000);
    } catch (error) {
      showToast("Please check your email and password again.", false);
    }
  };

  const handleGoogleRedirect = async () => {
    try {
      await handleGoogleSignIn();
      showToast(`Google sign-in successful. Go To Home Page`, true);
    } catch (error) {
      showToast("Google sign-in failed. Please try again.", false);
    }
  };

  const handleGithubRedirect = async () => {
    try {
      await handleGithubSignIn();
      showToast(`GitHub sign-in successful. Go To Home Page.`, true);
    } catch (error) {
      showToast("GitHub sign-in failed. Please try again.", false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen my-14">
      <div className=" flex justify-center items-center h-screen bg-cover bg-center">
        <Helmet>
          <title>Tour Goo | Log In</title>
        </Helmet>
        {toast && <Toast message={toast.message} isSuccess={toast.isSuccess} />}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-[#42A7C3] border-2 h-screen animate__animated animate__fadeInBottomLeft bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-xl shadow-lg w-full md:min-w-full lg:w-96 flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-[#42A7C3]">
            Log In
          </h1>
          <div className="mb-4 ">
            <label className="block mb-1">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              className="input border border-black border-opacity-30 rounded-md px-3 py-2 w-full"
              placeholder="Enter primary email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              className="input border border-black border-opacity-30 rounded-md px-3 py-2 w-full"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-[#42A7C3] text-white w-60 mb-4 "
          >
            Log In
          </button>

          <div className="flex justify-center items-center flex-wrap gap-5 w-full">
            <button
              className="btn flex flex-row"
              onClick={handleGoogleRedirect}
            >
              <img src="/images/google.png" alt="" className="h-10 w-full" />
            </button>
            <button className="btn" onClick={handleGithubRedirect}>
              <img src="/images/github.png" alt="" className="h-10 w-full" />
            </button>
          </div>

          <p className="text-center mt-4">
            New to this website?{" "}
            <Link to="/register" className="text-[#42A7C3] font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block animate__animated animate__fadeInTopRight">
        <img src="/images/login-right.png" className="h-screen" alt="" />
      </div>
    </div>
  );
};

export default Login;
