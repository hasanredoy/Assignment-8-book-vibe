import { NavLink } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
  return (
    <div className="navbar bg-base-300 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-300 rounded-box w-52 flex text-lg font-bold gap-x-5 gap-y-3 py-2">
            <NavLink className={" text-gray-600"} to={"/"}>Home</NavLink>
            <NavLink className={" text-gray-600"} to={"/listedBooks"}>Listed Books</NavLink>
            <NavLink className={" text-gray-600"} to={"/pagesToRead"}>Pages To Read</NavLink>
            <NavLink className={" text-gray-600"} to={"/blogs"}>Blogs</NavLink>
            <NavLink className={" text-gray-600"} to={"/about"}>About</NavLink>

          </ul>
        </div>
        <a className=" text-xl lg:text-2xl font-bold gap-x-0">B<span className="text-blue-500">oo</span>k Mania</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex text-xl font-semibold gap-x-5 gap-y-5 py-2">
          <NavLink className={"text-gray-700"} to={"/"}>Home</NavLink>
          <NavLink className={"text-gray-700"} to={"/listedBooks"}>Listed Books</NavLink>
          <NavLink className={"text-gray-700"} to={"/pagesToRead"}>Pages To Read</NavLink>
          <NavLink className={"text-gray-700"} to={"/blogs"}>Blogs</NavLink>
          <NavLink className={"text-gray-700"} to={"/about"}>About</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-x-3">
        <a className="btn border hover:border-gray-400 bg-green-600 text-white text-base lg:text-base font-medium lg:font-bold hover:bg-sky-300 hidden lg:flex">Sing Up</a>
        <a className="btn border hover:border-gray-800 bg-sky-600   text-white text-base lg:text-base font-medium lg:font-bold hover:bg-green-300">Sing In</a>
      </div>
    </div>
  );
};

export default Nav;