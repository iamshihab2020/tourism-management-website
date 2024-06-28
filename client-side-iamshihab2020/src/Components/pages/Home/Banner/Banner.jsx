/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CSS/swiper.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="z-0 relative">
      <div className="min-h-screen swipe-body animate__animated animate__fadeInUpBig z-1">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper z-0"
        >
          <div
            slot="container-start"
            className="parallax-bg min-h-screen bg-[url('https://images.pexels.com/photos/1035725/pexels-photo-1035725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] z-[0]"
            data-swiper-parallax="-23%"
          ></div>

          <SwiperSlide className="min-h-screen">
            <div className="z-0">
              <div
                className="title text-4xl md:text-5xl lg:text-6xl font-bold  "
                data-swiper-parallax="-300"
              >
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "bold",
                  }}
                >
                  Welcome To{" "}
                  <span style={{ color: "#40d6ff", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Travel Goo"]}
                      loop={6}
                      cursor
                      cursorStyle="__"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                      onLoopDone={handleDone}
                    />
                  </span>
                </h1>
              </div>

              <div className="mt-5" data-swiper-parallax="-100">
                <p>
                  At Travel Goo, we understand that planning a trip can be
                  overwhelming. That's why we're here to make your travel
                  journey as smooth as possible. Whether you're looking to
                  explore a new city, relax on a tropical beach, or embark on an
                  adventure-filled expedition, Travel Goo has you covered.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="min-h-screen">
            <div>
              <div
                className="title text-4xl md:text-5xl lg:text-6xl font-bold"
                data-swiper-parallax="-300"
              >
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "bold",
                  }}
                >
                  You have one life{" "}
                  <span style={{ color: "#40d6ff", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Eat", "Sleep", "Travel"]}
                      loop={12}
                      cursor
                      cursorStyle="__"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onLoopDone={handleDone}
                    />
                  </span>
                </h1>
              </div>

              <div className="mt-5" data-swiper-parallax="-100">
                <p>
                  Our user-friendly platform offers a wide range of services,
                  including tourist destination details, add tour destination in
                  my list, car rentals, and much more. With our intuitive
                  interface and comprehensive search options, finding the
                  perfect travel destination has never been easier.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="min-h-screen">
            <div>
              <div
                className="title text-4xl md:text-5xl lg:text-6xl font-bold"
                data-swiper-parallax="-300"
              >
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "bold",
                  }}
                >
                  Live your life{" "}
                  <span style={{ color: "#40d6ff", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Today", "Tomorrow", "and", "Everyday"]}
                      loop={6}
                      cursor
                      cursorStyle="__"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onLoopDone={handleDone}
                    />
                  </span>
                </h1>
              </div>

              <div className="mt-5" data-swiper-parallax="-100">
                <p>
                  Join the Travel Goo community today and let us help you turn
                  your travel dreams into reality!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;