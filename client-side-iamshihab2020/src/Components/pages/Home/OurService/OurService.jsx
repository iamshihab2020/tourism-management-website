import SectionHeader from "../../../shared/SectionHeader/SectionHeader"

const OurService = () => {
  return (
    <div className="px-5 py-7 lg:px-10 lg:py-14 my-16">
      <div className=" bg-[url('/images/wmap.svg')] bg-center bg-cover bg-no-repeat min-h-screen  flex flex-col items-center justify-center">
        <SectionHeader prop={"We always try to give you the best service"} />
        <p className="text-center">
          We always try to make our customer Happy. <br /> We provide all kind
          of facilities. Your Satisfaction is our main priority.
        </p>

        <div className=" flex items-center justify-evenly flex-wrap mt-10 gap-x-14 gap-y-10 ">
          <div className="card w-44 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center font-bold text-3xl">15+</h1>
              <p className="text-center">Years of Experience</p>
            </div>
          </div>

          <div className="card w-44 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center font-bold text-3xl">15K+</h1>
              <p className="text-center">
                Happy <br /> Travelers
              </p>
            </div>
          </div>

          <div className="card w-44 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center font-bold text-3xl">650+</h1>
              <p className="text-center">
                Place <br />
                Visited
              </p>
            </div>
          </div>

          <div className="card w-44 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center font-bold text-3xl">2K+</h1>
              <p className="text-center">
                Travel <br />
                History
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default OurService;