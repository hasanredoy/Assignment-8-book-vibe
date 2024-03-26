import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero  rounded-lg border border-gray-400 shadow-lg shadow-red-100 my-10 min-h-[500px] bg-white w-[95%] lg:container mx-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
       <div className=" h-full ">
        <div className="hero-overlay  bg-black opacity-80"></div>
       <img src="https://i.postimg.cc/m2hkz7Tg/images.jpg" className=" max-w-xs lg:max-w-sm rounded-lg  lg:h-[] z-50" />
       </div>
        <div className=" max-w-lg space-y-5">
          <h1 className=" mb-5 text-2xl lg:text-4xl font-bold">A Good Book Better Than 100 Fake Friends... </h1>
       
          <NavLink to={"/listedBooks"}><button className="btn hover:bg-slate-800 bg-[#be0a8be1] text-xl text-white font-bold">View The List</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;