import { Outlet } from "react-router-dom";
import Footer from "../Components/shared/Footer/Footer";
import Navbar from "../Components/shared/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Root;