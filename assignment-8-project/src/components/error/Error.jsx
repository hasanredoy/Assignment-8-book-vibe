import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-5  min-h-screen justify-center items-center align-middle font-bold ">
     <h3 className=" text-2xl ">Page Not founded ...</h3>
     <Link to={'/'}> <button className=" btn btn-error"> Go Home</button></Link>
    </div>
  );
};

export default Error;