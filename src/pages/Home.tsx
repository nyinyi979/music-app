import Playlists from "./Home/Playlists";
import RecentlyPlayed from "./Home/RecentlyPlayed";
import RecomenedForYou from "./Home/Recommended";
import Search from "./Home/Search";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-0 pt-10 bg-white">
      <Search />
      <Playlists />
      <div className="w-full grid grid-cols-2">
        <RecentlyPlayed />
        <RecomenedForYou />
      </div>
    </div>
  );
}
