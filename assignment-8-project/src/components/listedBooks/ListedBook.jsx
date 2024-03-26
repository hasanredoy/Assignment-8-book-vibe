import { useState } from "react";
import Banner from "../banner/Banner";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { getStorage } from "../utility/storage";
const ListedBook = () => {
  const [arrow, setArrow] = useState(false)
  const [tab, setTab] = useState(true)
  
  const read = getStorage('read')
  const wishlist= getStorage('wishlist')
  const objOfReadAndWish ={
      read,
      wishlist
  } 
  return (
    <div>

      <div>
        <Banner fromList={false}></Banner>
      </div>



      <div className=" flex justify-center">
        <details className="dropdown ">
          <summary onClick={() => setArrow(!arrow)} className="m-1 btn bg-green-600 hover:bg-red-600 text-white">Sort By{arrow ? <FaChevronDown></FaChevronDown> : <FaChevronUp></FaChevronUp>} </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-40">
            <li><a>Rating</a></li>
            <li><a>Number of Page</a></li>
            <li><a>Year Of Publish</a></li>
          </ul>
        </details>
      </div>

      {/* tabs section  */}

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap lg:container lg:mx-auto ">
        <Link to={''} rel="noopener noreferrer" onClick={()=>setTab(true)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab?" border border-b-0":"border-b "}    rounded-t-lg border-gray-400 `}>
          
          <span className="font-semibold">Read Books</span>
        </Link>
        <Link to={"wishlist"} rel="noopener noreferrer"  onClick={()=>setTab(false)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${!tab?"border-b-0 border ":"border-b"}    rounded-t-lg border-gray-400 `}>
          
          <span  className="font-semibold">Wishlist Books</span>
        </Link>
      </div>
        <div className=" my-10 container mx-auto">
        <Outlet context={objOfReadAndWish}></Outlet>
        </div>
        
    </div>
  );
};

export default ListedBook;