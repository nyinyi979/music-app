import Player from "./Player";
import Sidebar from "./Sidebar";
import "./Sidebar.css"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <div className="layout-container">
        <Sidebar />
        <Outlet />
      </div>
      <Player />
    </div>
  );
}
