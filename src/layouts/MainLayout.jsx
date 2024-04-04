import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <>
      <div className="bg-amber-500">
        <Nav />
      </div>

      <Outlet />
    </>
  );
};

export default MainLayout;
