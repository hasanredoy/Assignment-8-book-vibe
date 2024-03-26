import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData()
  console.log(blogs);
  return (
    <div className=" ">
      <div className=" bg-base-300 py-20 my-3 rounded-xl">
        <h1 className=" font-bold text-2xl lg:text-5xl text-center  bg-gradient-to-r from-[#fa7575] to-blue-500 text-transparent bg-clip-text">Latest Blogs About Coding</h1>
      </div>
     <div className=" grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-5 my-10">
     {
      blogs.map(blo => <BlogCard key={ blo.id } blog={blo}></BlogCard>)
     }
     </div>
    </div>
  );
};

export default Blogs;