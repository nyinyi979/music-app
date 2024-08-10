import Plus from "../../svg/plus.svg";
import React from "react";
import Playlist from "../../svg/playlists.svg"
import { Album } from "../../pages/Home/Playlists";
import { Link } from "react-router-dom";
export default function YourPlaylists(){
    const [playlists, setPlaylists] = React.useState<Album[]>([]);
    const [loading, setLoading] = React.useState(true);
    React.useMemo(()=>{
      const data = fetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024").then((data)=>{
        return data.json();
      })
      data.then((data)=>{
        setPlaylists(data.album)
        setLoading(false)
      })
    },[])
    return(
        <div className="playlist-container">
        <p>
          Your Playlists
          <img src={Plus} alt="plus" />
        </p>
        {loading ? new Array(3).fill(0).map((x,ind)=><div key={x+ind} className="playlist-loader"/>) :
        playlists.map((li) => {
          const active = li.idAlbum === location.pathname;
          return (
            <Link
              key={li.idAlbum}
              to={`/songs/${li.idAlbum}`}
              className={`playlist-link ${
                active
                  ? "active-link"
                  : "n-active-link"
              }`}
            >
              <span className="playlist-span">
                <img src={Playlist} alt="playlist"/>
              </span>
              <span>{li.strAlbum}</span>
            </Link>
          );
        })}
      </div>
    )
}