import Playlists from "./Home/Playlists";
import RecentlyPlayed from "./Home/RecentlyPlayed";
import RecomenedForYou from "./Home/Recommended";
import Search from "./Home/Search";

export default function Home() {
  return (
    <div className="home">
      <Search />
      <Playlists />
      <div className="home-sub">
        <RecentlyPlayed />
        <RecomenedForYou />
      </div>
    </div>
  );
}
