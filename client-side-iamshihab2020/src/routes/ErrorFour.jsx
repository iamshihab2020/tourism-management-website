import { Link } from "react-router-dom";
import { FaTentArrowTurnLeft } from "react-icons/fa6";


const ErrorFour = () => {
  return (
    <>
      <div className="bg-[url('/images/error.jpg')] bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center flex-col py-16 ">
        <div className="bg-blur-lg backdrop-blur-lg backdrop-filter p-20 rounded-2xl flex flex-col items-center justify-center">
          <div className="py-14 text-center">
            <h1 className="text-red-600 font-black text-4xl md:text-5xl lg:text-6xl">
              4O4 Not Found!
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl">
              Try to reload the page or go back to home and try again
            </p>
          </div>

          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-secondary transition-colors"
          >
            <FaTentArrowTurnLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorFour;


