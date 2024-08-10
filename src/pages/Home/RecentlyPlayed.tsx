import HeartFill from "../../svg/heart-fill.svg";
import Menu from "../../svg/menu.svg";
import Heart from "../../svg/heart.svg";
import Play from "../../svg/play";
import React from "react";
import getDuration from "../../components/duration";
import "./Recent.css"
import { useUserStore } from "../../store/useUserData";

export default function RecentlyPlayed() {
  const [songs, setSongs] = React.useState<Track[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(()=>{
    const data = fetch("https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888").then((data)=>{
      return data.json();
    })
    data.then((data)=>{
      setSongs(data.track)
      setLoading(false)
    })
  },[])
  const {setSongData} = useUserStore((state)=>state)
  return (
    <div className="recent-container">
      <p>Recently Played</p>
      <div className="recents">
        {loading ? new Array(3).fill(0).map((x,index)=><div key={x+index} className="loader"/>) :
        songs.map((song) => (
          <button
            key={song.idTrack}
            onClick={()=>setSongData({artist:song.strArtist,duration:song.intDuration,songName:song.strTrack})}
            className="song "
          >
            <div className="song-hover">
              <img src={"https://www.theaudiodb.com/images/media/album/thumb/house-of-balloons-4ee693d4138bb.jpg"} className="size-full bg-black" />
              <div className="play">
                <Play stroke="#fff" />
              </div>
            </div>
            <div className="track-info">
              <p className="track">
                {song.strTrack}
              </p>
              <p className="artist">
                {song.strArtist}
              </p>
              <p>{getDuration(song.intDuration)}</p>
              <p>
                <img
                  src={Number(song.intLoved) ? HeartFill : Heart}
                />
              </p>
              <p>
                <img src={Menu} />
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export interface Track {
  idTrack: string
  idAlbum: string
  idArtist: string
  idLyric: string
  idIMVDB: any
  strTrack: string
  strAlbum: string
  strArtist: string
  strArtistAlternate: any
  intCD: any
  intDuration: string
  strGenre: string
  strMood: any
  strStyle: any
  strTheme: any
  strDescriptionEN?: string
  strDescriptionDE: any
  strDescriptionFR: any
  strDescriptionCN: any
  strDescriptionIT: any
  strDescriptionJP: any
  strDescriptionRU: any
  strDescriptionES: any
  strDescriptionPT: any
  strDescriptionSE: any
  strDescriptionNL: any
  strDescriptionHU: any
  strDescriptionNO: any
  strDescriptionIL: any
  strDescriptionPL: any
  strTrackThumb: any
  strTrack3DCase: any
  strTrackLyrics?: string
  strMusicVid?: string
  strMusicVidDirector: any
  strMusicVidCompany: any
  strMusicVidScreen1: any
  strMusicVidScreen2: any
  strMusicVidScreen3: any
  intMusicVidViews: any
  intMusicVidLikes: any
  intMusicVidDislikes: any
  intMusicVidFavorites: any
  intMusicVidComments: any
  intTrackNumber: string
  intLoved: string
  intScore: any
  intScoreVotes: any
  intTotalListeners: any
  intTotalPlays: any
  strMusicBrainzID: string
  strMusicBrainzAlbumID: string
  strMusicBrainzArtistID: string
  strLocked: string
}
