import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurService from "../OurService/OurService";
import TouristSpots from "../TouristSpots/TouristSpots";
import Brands from "../Brands/Brands";
// import OurService from "../OurService/OurService";


const Home = () => {

  return (
    <>
      <Helmet>
        <title>Tour Goo | Home</title>
      </Helmet>

      <main>
        <div className="z-[2]">
          <Banner />
        </div>
        <OurService />
        <TouristSpots />
        <Brands/>
      </main>

    </>
  );
};

export default Home;
