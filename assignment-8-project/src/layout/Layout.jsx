import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Audio } from 'react-loader-spinner'
const Layout = () => {
  const navigation = useNavigation()
  return (
    <div className=" bg-gray-100">
        <div className=" sticky top-0 z-50">
        <Nav></Nav>
        </div>
        {
          navigation.state === "loading"?<div className="flex justify-center min-h-screen items-center"> <Audio
          height="80"
          width="80"
          radius="9"
          color="red"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /></div>:<div className=" min-h-[calc(100vh-114px)]">
          <Outlet></Outlet>
        </div>
        }
        <Footer></Footer>
       
    </div>
  );
};

export default Layout;