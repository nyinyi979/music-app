import Home from "../../svg/home.svg";
import HomeFill from "../../svg/home-fill.svg";
import Song from "../../svg/song.svg";
import Playlists from "../../svg/playlists.svg";
import ForYou from "../../svg/foryou.svg";
import Chart from "../../svg/top.svg";
import { useLocation, useParams } from "react-router-dom";
export default function Browse() {
  const location = useLocation();
  const params = useParams();
  const links = [
    {
      value: "Home",
      url: "/",
      icon: Home,
      fillIcon: HomeFill,
    },
    {
      value: "Songs",
      url: `/songs/${params.id}`,
      icon: Song,
      fillIcon: Song,
    },
    {
      value: "Playlists",
      url: "/playlists",
      icon: Playlists,
      fillIcon: Playlists,
    },
    {
      value: "Just for You",
      url: "/foryou",
      icon: ForYou,
      fillIcon: ForYou,
    },
    {
      value: "Top Charts",
      url: "/charts",
      icon: Chart,
      fillIcon: Chart,
    },
  ];

  return (
      <div className="browse-container">
        <p>BROWSE</p>
        {links.map((li) => {
          const active = li.url === location.pathname;
          return (
            <a
              key={li.url}
              href={li.url}
              className={`link ${
                active
                  ? "active-link"
                  : "n-active-link"
              }`}
            >
              <span className="size-5">
                <img src={active ? li.fillIcon : li.icon} />
              </span>
              <span>{li.value}</span>
            </a>
          );
        })}
      </div>
  );
}
