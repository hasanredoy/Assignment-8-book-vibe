
const BlogCard = ({blog}) => {
  return (
    <div className=" card card-compact  bg-base-100 shadow-xl">
      <figure><img src={blog.cover_image||'https://i.postimg.cc/m2hkz7Tg/images.jpg'}  className="bg-gray-400  h-full" /></figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold hover:underline">{blog.title}</h2>
        <p className=" font-semibold">{blog.description}</p>
        <div className="card-actions justify-center my-5">
          <button  className="btn btn-accent hover:btn-link"><a href={blog.url}target=" blank">Show Details</a></button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;