import { useOutletContext } from "react-router-dom";

const Read = () => {
  const {read} = useOutletContext()
  console.log(read);
  return (
    <div className="  flex flex-col gap-y-5 rounded-lg bg-white">
       {
        read.map(reading =>  <div key={reading.bookId} className="hero  bg-base-100 rounded-lg border border-gray-400 p-2">
        <div className="hero-content flex-col lg:flex-row  bg-base-300 rounded-lg">
          <img src={reading.image} className="max-w-sm rounded-lg shadow-2xl w-[96%] mx-auto lg:mx-0 lg:w-[40%]" />
          <div className="w-[96%] lg:ml-[10%] mx-auto lg:mx-0 lg:w-[50%]">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>)||''
       }
    </div>
  );
};

export default Read;