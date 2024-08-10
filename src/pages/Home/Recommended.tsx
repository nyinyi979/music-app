import React from "react";
import Play from "../../svg/play";
import "./Recommend.css";
import { Track } from "./RecentlyPlayed";
export default function RecomenedForYou() {
  const [songs, setSongs] = React.useState<Track[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const data = fetch(
      "https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115886",
    ).then((data) => {
      return data.json();
    });
    data.then((data) => {
      setSongs(data.track);
      setLoading(false);
    });
  }, []);

  return (
    <div className="recommend-container">
      <p className="h">Recomened for you</p>
      <div className="recommend">
        {loading
          ? new Array(3)
              .fill(0)
              .map((x, index) => <div key={x + index} className="loader" />)
          : songs.map((song) => (
              <button key={song.idTrack} className="song">
                <div className="song-hover">
                  <img
                    src="https://www.theaudiodb.com/images/media/album/thumb/thursday-4ee69293cd094.jpg"
                    className="size-full bg-gray-300"
                  />
                  <div className="play">
                    <div>
                      <Play stroke="#fff" />
                    </div>
                  </div>
                </div>
                <div className="track-info">
                  <p className="track">{song.strTrack}</p>
                  <p className="artist">{song.strArtist}</p>
                </div>
              </button>
            ))}
      </div>
    </div>
  );
}
