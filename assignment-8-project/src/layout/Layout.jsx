import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className=" bg-gray-100">
        <div className=" sticky top-0 z-50">
        <Nav></Nav>
        </div>
        <div className=" min-h-[calc(100vh-114px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
       
    </div>
  );
};

export default Layout;