import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Card = ({ book }) => {
  const { bookId, bookName, image, author, category, tags ,rating } = book || {}
  return (
    <Link to={`/bookDetails/${bookId}`}  className=' bg-base-300 p-3 rounded-lg border border-gray-300 '>
      <div className="card  bg-base-300 shadow-xl h-full  ">
        <figure className='p-3 bg-white'><img className=' h-[200px] ' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className=' flex justify-between'>
            <h2 className=" font-bold text-base text-green-500 bg-[#ffffffa9] rounded-full px-2">
              {tags[0]}
            </h2>
            <h2 className="  font-bold text-base text-green-500 bg-[#ffffffa9] rounded-full px-2">
              {tags[2]}
            </h2>
          </div>
          <h2 className=' font-bold text-xl my-5'>{bookName}</h2>

          <p className=' font-semibold mb-3'>By : {author}</p>
          <div className="card-actions justify-between my-2">
            <div className=" text-lg font-semibold">{category}</div>
            <div className=" flex gap-2 text-lg justify-center align-middle">{rating} <CiStar className=" text-xl font-bold mt-1"></CiStar></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;