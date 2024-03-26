import {
  Link,
  useOutletContext
} from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
// import { stateContext } from "../listedBooks/ListedBook";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Wishlist = () => {
  const { wishlist } = useOutletContext()
  const [toggle, setToggle] = useState(true)
  // console.log(data);
  // const [data] = useContext(stateContext)
  const [arrow, setArrow] = useState(false)
  const [newData, setNewData] = useState([])
  console.log(newData);
  const handelSort = (sort) => {
    if (sort === 'page') {
      setToggle(!toggle)
      const newRating = wishlist.sort((a, b) => a.totalPages - b.totalPages)

      setNewData(newRating)
    }
    else if (sort === 'rating') {
      setToggle(!toggle)
      const newRating = wishlist.sort((a, b) => a.rating - b.rating)

      setNewData(newRating)
    }
   else if (sort === 'year') {
      setToggle(!toggle)
      const newRating = wishlist.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)

      setNewData(newRating)
    }
  }
  return (
    <div className="  flex flex-col   rounded-lg">
    <div className=" flex justify-center lg:justify-end w-[95%]">
      <details className="dropdown mb-10 mt-0">
        <summary
          onClick={() => setArrow(!arrow)}
          className="m-1 btn bg-green-600 hover:bg-red-600 text-white">Sort By
          {arrow ? <FaChevronUp></FaChevronUp>:<FaChevronDown></FaChevronDown>} 
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-40 flex flex-col gap-y-2">
          <button className="btn" onClick={() => handelSort('rating')}>Rating</button>
          <button className="btn" onClick={() => handelSort('page')}>Number of Page</button>
          <button className="btn" onClick={() => handelSort('year')}>Year Of Publishing</button>

        </ul>
      </details>
    </div>



    <div className={toggle ? 'hidden' : 'block'}>
      {
        newData.map(reading => <div key={reading.bookId} className="  bg-base-100 rounded-lg border border-gray-400 p-2 my-5">
          <div className=" flex flex-col lg:flex-row  bg-base-200 rounded-lg">
            <div className=" rounded-lg shadow-2xl w-[96%] mx-auto lg:mx-0 lg:w-[20%] max-h-64">
              <img src={reading.image} className="w-64 h-64 mx-auto lg:mx-0 " />

            </div>
            <div className="w-[96%] py-10 lg:py-0 lg:ml-[3%] mx-auto lg:mx-0 lg:w-[80%]">
              <h1 className="text-2xl font-bold">{reading.bookName}</h1>
              <p className=" py-3 text-xl"><span className="font-bold ">By:</span> {reading.author}</p>
              <div className="font-bold text-xl pb-4 flex flex-col lg:flex-row gap-5">
                <div className="flex gap-4 h-full items-center">
                  <h3 className=" ">Tag </h3>
                  <h2 className="  font-bold text-green-500 bg-[#ffffffa9] rounded-full w-auto px-2">
                    #{reading.tags[2]}
                  </h2>
                  <h2 className="  font-bold  text-green-500 bg-[#ffffffa9] rounded-full w-auto px-2">
                    #{reading.tags[0]}
                  </h2>
                </div>
                <div>
                  <h1 className="flex gap-3"><IoLocationOutline className=" font-bold text-2xl"></IoLocationOutline> Published at : <span>{reading.yearOfPublishing}</span></h1>
                </div>
              </div>

              <div>
                <div className="flex  lg:flex-row gap-4 h-full items-center font-normal border-b border-gray-400 my-4 pb-2">
                  <h3 className="flex gap-3 "><IoPeopleOutline className=" text-2xl"></IoPeopleOutline> Publisher: <span >{reading.publisher}</span></h3>
                  <h2 className="flex gap-3">
                    <IoDocumentTextOutline className="text-2xl"></IoDocumentTextOutline> Pages: <span> {reading.totalPages}</span>
                  </h2>

                </div>
              </div>
              <div className=" flex flex-col lg:flex-row gap-5 w-full">
                <button className="btn rounded-full px-3 bg-orange-200 text-orange-500 py-3 w-full lg:w-auto">Category: <span>{reading.category}</span></button>
                <button className=" btn rounded-full px-3 bg-blue-200 text-blue-500 py-3 w-full lg:w-auto">Rating: {reading.rating}</button>
                <Link to={`/bookDetails/${reading.bookId}`}>
                  <button className="btn btn-secondary rounded-full w-full">View Details</button></Link>
              </div>
            </div>
          </div>
        </div>) || []
      }
    </div>
    <div className={toggle ? 'block' : 'hidden'}>
      {
        wishlist.map(reading => <div key={reading.bookId} className="  bg-base-100 rounded-lg border border-gray-400 p-2 my-5">
          <div className=" flex flex-col lg:flex-row  bg-base-200 rounded-lg">
            <div className=" rounded-lg shadow-2xl w-[96%] mx-auto lg:mx-0 lg:w-[20%] max-h-64">
              <img src={reading.image} className="w-64 h-64 mx-auto lg:mx-0 " />

            </div>
            <div className="w-[96%] py-10 lg:py-0 lg:ml-[3%] mx-auto lg:mx-0 lg:w-[80%]">
              <h1 className="text-2xl font-bold">{reading.bookName}</h1>
              <p className=" py-3 text-xl"><span className="font-bold ">By:</span> {reading.author}</p>
              <div className="font-bold text-xl pb-4 flex flex-col lg:flex-row gap-5">
                <div className="flex gap-4 h-full items-center">
                  <h3 className=" ">Tag </h3>
                  <h2 className="  font-bold text-green-500 bg-[#ffffffa9] rounded-full w-auto px-2">
                    #{reading.tags[2]}
                  </h2>
                  <h2 className="  font-bold  text-green-500 bg-[#ffffffa9] rounded-full w-auto px-2">
                    #{reading.tags[0]}
                  </h2>
                </div>
                <div>
                  <h1 className="flex gap-3"><IoLocationOutline className=" font-bold text-2xl"></IoLocationOutline> Published at : <span>{reading.yearOfPublishing}</span></h1>
                </div>
              </div>

              <div>
                <div className="flex  lg:flex-row gap-4 h-full items-center font-normal border-b border-gray-400 my-4 pb-2">
                  <h3 className="flex gap-3 "><IoPeopleOutline className=" text-2xl"></IoPeopleOutline> Publisher: <span >{reading.publisher}</span></h3>
                  <h2 className="flex gap-3">
                    <IoDocumentTextOutline className="text-2xl"></IoDocumentTextOutline> Pages: <span> {reading.totalPages}</span>
                  </h2>

                </div>
              </div>
              <div className=" flex flex-col lg:flex-row gap-5 w-full">
                <button className="btn rounded-full px-3 bg-orange-200 text-orange-500 py-3 w-full lg:w-auto">Category: <span>{reading.category}</span></button>
                <button className=" btn rounded-full px-3 bg-blue-200 text-blue-500 py-3 w-full lg:w-auto">Rating: {reading.rating}</button>
                <Link to={`/bookDetails/${reading.bookId}`}>
                  <button className="btn btn-secondary rounded-full w-full">View Details</button></Link>
              </div>
            </div>
          </div>
        </div>) || []
      }
    </div>
  </div>
  );
};

export default Wishlist;