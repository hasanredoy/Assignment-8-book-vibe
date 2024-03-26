import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className=" bg-gradient-to-r from-lime-100 via-red-100 to-blue-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">About <span className="text-violet-800">Us</span>
		</h1>
     <h3 className=" my-5 font-bold text-xl">Why Visit Our WebSite</h3>
     <ul className=" list-disc font-bold lg:ml-10">
      <li>High Quality Books ✅</li>
      <li>Online Read Facility ✅</li>
      <li>No Junk Books ❌</li>
      <li>Only authentic Books ✅</li>
      <li>Always Update Latest Books ✅</li>
     </ul>
		<div className="flex flex-wrap justify-center gap-5 my-5">
			<Link to={'/'}>
      <button className=" font-bold rounded bg-violet-400 text-gray-900 btn btn-outline text-lg" >Check Our Books</button>
      </Link>
			<button className="text-lg border rounded  border-gray-700 btn btn-info">Contact Us</button>
		</div>
	</div>
</section>
  );
};

export default About;