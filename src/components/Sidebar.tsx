import React from "react";
import Popup from "./Sidebar/Popup";
import Browse from "./Sidebar/Browse";
import YourPlaylists from "./Sidebar/Playlist";
import "./Sidebar.css";
import { AnimatePresence, motion } from "framer-motion";
import { useUserStore } from "../store/useUserData";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  const { tier, username } = useUserStore((state) => state);

  return (
    <div className="sidebar">
      <div className="user-container">
        <img />
        <div className="user">
          <button onClick={toggle}>{username}</button>
          <p className="w-fit p-0.5 border border-gray-300 font-bold text-[10px] text-gray-300">
            {tier}
          </p>
          <motion.p
            initial={{ rotate: 90 }}
            animate={{ rotate: open ? -90 : 90 }}
            className="arr"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </motion.p>
          <AnimatePresence>{open && <Popup />}</AnimatePresence>
        </div>
      </div>
      <Browse />
      <YourPlaylists />
    </div>
  );
}
