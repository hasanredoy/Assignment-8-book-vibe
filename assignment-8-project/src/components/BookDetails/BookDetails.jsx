import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveRead, saveWishList } from "../utility/storage";

const BookDetails = () => {
  const { id } = useParams()
  const [books, setBooks] = useState([])
  const [newBooks, setNewBooks] = useState([])
  useEffect(() => {
    fetch('../../bookData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  const handleRead=(id)=>{
     saveRead(id)
  }
  const handleWishlist=(id)=>{
     saveWishList(id)
  }


  const findingBookViaId = books.find(book => book.bookId == id)
  const { bookId, bookName, image, author, category, tags, rating, review, totalPages, yearOfPublishing, publisher } = findingBookViaId || {}
  return (
    <div>
      <div className=" my-10 rounded-lg  bg-white container mx-auto p-0">
        <div className=" flex  justify-between flex-col lg:flex-row gap-10">
          <div className="bg-base-300 p-10 w-[96%]  mx-auto lg:mx-0 lg:w-[40%]  rounded-lg">
            <img src={image} className=" mx-auto rounded-lg shadow-2xl  w-full " />
          </div>
          <div className=" w-[96%] mx-auto lg:w-[60%] ">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p className="py-3 font-semibold text-lg"><span className=" font-bold">By :</span> {author} </p>
            <p className="py-3 font-semibold text-lg border-y border-gray-300">{category} </p>
            <p className="py-6 font-medium text-lg"><span className=" font-bold">Review :</span> {review} </p>
            <div className=" flex gap-5 my-5">
              <h2 className="py-3 font-medium text-lg"><span className=" font-bold">Tag </span>  </h2>
              <h2 className=" flex justify-center items-center font-bold text-lg text-green-500 bg-base-300 py-0 rounded-full px-2"> # {tags ? tags[0] : ' '} </h2>
              <h2 className=" font-bold text-lg text-green-500 bg-base-300 rounded-full px-4 flex justify-center items-center"># {tags ? tags[2] : ' '} </h2>
            </div>
           <div className=" flex flex-row w-full lg:w-[55%]  my-10">
           <div className=" w-[50%] flex flex-col space-y-3">
              <h3 className=" text-lg ">Number of Pages: </h3>
              <h3 className=" text-lg ">Publisher: </h3>
              <h3 className=" text-lg flex justify-between">Year Of Publishing:</h3>
              <h3 className=" text-lg flex justify-between">Rating:</h3>
            </div>
            <div className=" w-[50%] flex flex-col justify-between">
              <span className=" text-lg font-bold  ">{totalPages}</span>
              <span className=" text-lg font-bold ">{publisher}</span>
              <span className=" text-lg font-bold ">{yearOfPublishing}</span>
              <span className=" text-lg font-bold ml-0 mr-auto">{rating}</span>
            </div>
           </div>
            <div className=" flex gap-5">
              <button onClick={()=>handleRead(findingBookViaId||'')} className="btn btn-accent hover:bg-gray-300 hover:border hover:border-sky-600 font-bold text-lg hover:text-sky-700">Read</button>
              <button onClick={()=>handleWishlist(findingBookViaId||'')} className="btn btn-secondary hover:bg-gray-300 hover:border hover:border-red-400 hover:text-black font-bold text-lg">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;