
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
       <div className=" h-full ">
        <div className="overlay  bg-black opacity-50"></div>
       <img src="https://i.postimg.cc/m2hkz7Tg/images.jpg" className="max-w-sm rounded-lg shadow-2xl h-[400px] z-50" />
       </div>
        <div className=" max-w-lg">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;