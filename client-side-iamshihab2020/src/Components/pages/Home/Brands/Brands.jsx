import Marquee from "react-fast-marquee";
import SectionHeader from "../../../shared/SectionHeader/SectionHeader"

const Brands = () => {
  return (
    <div className="mt-20 pb-20">
      <SectionHeader prop={"Associated With World's Most Popular Brands "}/>
      <div className="my-10">
        <Marquee>
          <div className="mx-10"> <img className=" h-20 lg:h-36 " src="/images/booking.png" alt="" /> </div>
          <div className="mx-10"> <img className=" h-20 lg:h-36 " src="/images/airbnb.png" alt="" /> </div>
          <div className="mx-10"> <img className=" h-20 lg:h-36 " src="/images/ex.png" alt="" /> </div>
          <div className="mx-10"> <img className=" h-20 lg:h-36 " src="/images/uber.png" alt="" /> </div>
          <div className="mx-10"> <img className=" h-20 lg:h-36 " src="/images/trip.png" alt="" /> </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;