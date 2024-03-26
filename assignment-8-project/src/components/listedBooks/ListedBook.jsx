import { createContext, useEffect, useState } from "react";
import Banner from "../banner/Banner";
// import { FaChevronDown } from "react-icons/fa";
// import { FaChevronUp } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
export const stateContext = createContext([])
import { getStorage } from "../utility/storage";

const ListedBook = () => {
  // const [arrow, setArrow] = useState(false)
  const [tab, setTab] = useState(true)
  const [read, setRead] = useState([])
  const [wishlist, setWishlist] = useState([])
  // const [rating, setRating] = useState([])
  const [data, setData ]=useState([])
  // const rating = read.map(red => red.rating)


 
   useEffect(()=>{
    const Read = getStorage('read')
    setRead(Read)
    // setRating(Read)
    setData(Read)
  const wishlist= getStorage('wishlist')
  setWishlist(wishlist)
   },[])


   
  const objOfReadAndWish ={
    read,
    wishlist
  } 
  // console.log(rating);


  
  return (
    <div>

      <div>
        <Banner fromList={false}></Banner>
      </div>



      <div className=" flex justify-center">
        <details className="dropdown ">
          <summary 
          // onClick={() => setArrow(!arrow)}
           className="m-1 btn bg-green-600 hover:bg-red-600 text-white">Sort By
          {/* {arrow ? <FaChevronUp></FaChevronUp>:<FaChevronDown></FaChevronDown>}  */}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-40">
            {/* <button className="btn" onClick={()=>handelSort('rating')}>Rating</button> */}
            
            {/* <li><a>Year Of Publish</a></li> */}
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
        <stateContext.Provider value={[data , setData]}>
        <Outlet context={objOfReadAndWish}></Outlet>
        </stateContext.Provider>
        </div>
        
    </div>
  );
};

export default ListedBook;