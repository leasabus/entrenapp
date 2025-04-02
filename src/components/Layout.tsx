import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="flex-1 pl-80 pt-10">
        <Outlet />
      </div>
    </div>
  );
};
