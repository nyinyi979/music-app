import HeartFill from "../svg/heart-fill.svg";
import Menu from "../svg/menu.svg";
import Heart from "../svg/heart.svg";
import Play from "../svg/play";
import React from "react";
import getDuration from "../components/duration";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/useUserData";

export default function Songs() {
  const [songs, setSongs] = React.useState<Track[]>([]);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();
  React.useEffect(() => {
    setLoading(true);
    const data = fetch(
      `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${params.id || 112024}`,
    ).then((data) => {
      return data.json();
    });
    data.then((data) => {
      setSongs(data.track);
      setLoading(false);
    });
  }, [params.id]);
  const updateSong = useUserStore((store) => store.setSongData);
  return (
    <div className="w-full h-[100vh] flex flex-col gap-6 py-10 px-10 bg-white overflow-y-auto text-black">
      <p className="font-semibold text-lg">
        {loading ? "" : songs[0].strAlbum}
      </p>
      <div className="w-full flex flex-col gap-5">
        {loading
          ? new Array(10)
              .fill(0)
              .map((x, index) => (
                <div
                  key={x + index}
                  className="w-full h-10 bg-gray-100 animate-pulse"
                />
              ))
          : songs.map((song) => (
              <button
                key={song.idTrack}
                onClick={() =>
                  updateSong({
                    artist: song.strArtist,
                    duration: song.intDuration,
                    songName: song.strTrack,
                  })
                }
                className="song flex gap-4 items-center hover:bg-gray-100 duration-300 text-[10px]"
              >
                <div className="song-hover size-10 relative">
                  <img
                    src={
                      "https://www.theaudiodb.com/images/media/album/thumb/house-of-balloons-4ee693d4138bb.jpg"
                    }
                    className="size-full bg-black"
                  />
                  <div className="size-full absolute top-0 left-0 bg-black/60">
                    <Play stroke="#fff" />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <p className="w-24 overflow-hidden font-bold text-ellipsis text-left">
                    {song.strTrack}
                  </p>
                  <p className="w-16 overflow-hidden text-ellipsis text-left">
                    {song.strArtist}
                  </p>
                  <p className="text-left">{getDuration(song.intDuration)}</p>
                  <p>
                    <img
                      className="size-3"
                      src={Number(song.intLoved) ? HeartFill : Heart}
                    />
                  </p>
                  <p>
                    <img className="size-3" src={Menu} />
                  </p>
                </div>
              </button>
            ))}
      </div>
    </div>
  );
}

export interface Track {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  idLyric: string;
  idIMVDB: any;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  strArtistAlternate: any;
  intCD: any;
  intDuration: string;
  strGenre: string;
  strMood: any;
  strStyle: any;
  strTheme: any;
  strDescriptionEN?: string;
  strDescriptionDE: any;
  strDescriptionFR: any;
  strDescriptionCN: any;
  strDescriptionIT: any;
  strDescriptionJP: any;
  strDescriptionRU: any;
  strDescriptionES: any;
  strDescriptionPT: any;
  strDescriptionSE: any;
  strDescriptionNL: any;
  strDescriptionHU: any;
  strDescriptionNO: any;
  strDescriptionIL: any;
  strDescriptionPL: any;
  strTrackThumb: any;
  strTrack3DCase: any;
  strTrackLyrics?: string;
  strMusicVid?: string;
  strMusicVidDirector: any;
  strMusicVidCompany: any;
  strMusicVidScreen1: any;
  strMusicVidScreen2: any;
  strMusicVidScreen3: any;
  intMusicVidViews: any;
  intMusicVidLikes: any;
  intMusicVidDislikes: any;
  intMusicVidFavorites: any;
  intMusicVidComments: any;
  intTrackNumber: string;
  intLoved: string;
  intScore: any;
  intScoreVotes: any;
  intTotalListeners: any;
  intTotalPlays: any;
  strMusicBrainzID: string;
  strMusicBrainzAlbumID: string;
  strMusicBrainzArtistID: string;
  strLocked: string;
}
