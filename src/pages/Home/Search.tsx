import React from "react";
import Noti from "../../svg/noti.svg";
import "./Search.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [noti, setNoti] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const toggleOpen = () => {
    if (!open) {
      setOpen(true);
    } else if (search === "") setOpen(false);
  };
  return (
    <div className="search-container">
      <div className="search">
        <motion.div
          onClick={toggleOpen}
          initial={{
            width: 15,
            height: 15,
            borderRadius: 20,
            borderColor: "#1f2937",
          }}
          animate={{
            width: open ? 500 : 15,
            height: open ? 30 : 15,
            borderRadius: open ? 10 : 20,
            borderColor: open ? "#a5a5a5" : "#1f2937",
            display: open ? "none" : "block",
          }}
          transition={{ delay: open ? 0 : 0.15 }}
          className="circle"
        />
        <motion.div
          onClick={toggleOpen}
          initial={{ bottom: 12, left: 14, rotate: -43 }}
          animate={{
            bottom: open ? 10 : 12,
            left: open ? 10 : 14,
            rotate: open ? 0 : -43,
          }}
          transition={{ delay: open ? 0 : 0.15 }}
          className="line"
        />
        <motion.input
          onClick={toggleOpen}
          onFocus={(ev) => ev.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0, display: open ? "block" : "none" }}
          transition={{ delay: open ? 0.2 : 0 }}
          type="text"
          value={search}
          placeholder="Search for songs, playlist, albums"
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </div>
      <button
        onClick={() => setNoti(!noti)}
        className="w-fit relative ml-auto p-2 rounded-xl hover:bg-gray-50 duration-300"
      >
        <img src={Noti} alt="notification" className="size-6" />
        <AnimatePresence>{noti && <NotiPopup />}</AnimatePresence>
        <span className="size-3 flex absolute right-2 top-1 pl-1 pt-[1px] rounded-full bg-red-500 text-[7px] text-white">
          1
        </span>
      </button>
    </div>
  );
}
const NotiPopup = () => {
  const notifications = [
    {
      img: "",
      noti: "Someone likes your playlist",
      item: "playlist name",
      date: "2 min",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 20 }}
      className="w-[280px] h-fit absolute -right-0 top-10 flex flex-col gap-3 overflow-y-auto rounded-lg overflow-hidden bg-white border-[1px] border-gray-100  text-[10px] z-[20] shadow-popup"
    >
      {notifications.map((noti, index) => (
        <button
          key={noti.noti + index}
          className="flex gap-3 items-center p-2 hover:bg-gray-100 duration-300"
        >
          <img className="size-8 rounded-full bg-black" />
          <p className="w-[150px] overflow-hidden text-left">
            {noti.noti} <span className="font-bold">{noti.item}</span>
          </p>
          <span className="ml-auto">{noti.date}</span>
        </button>
      ))}
    </motion.div>
  );
};
