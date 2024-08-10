import React from "react";
import Play from "../svg/play";
import { Link } from "react-router-dom";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = React.useState<Album[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [mouseIn, setMouseIn] = React.useState(-1);
  React.useEffect(()=>{
    const data = fetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024").then((data)=>{
      return data.json();
    })
    data.then((data)=>{
      setPlaylists(data.album)
      setLoading(false)
    })
  },[])
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-wrap gap-5 align-middle p-10 bg-white duration-200">
      {loading ? 
       new Array(5).fill(0).map((val,ind)=><div key={val+ind} className="w-[500px] h-[300px] bg-gray-100 animate-pulse"/>) :
      playlists.map((playlist, index) => {
        const active = mouseIn === index;
        return (
          <Link
            onMouseEnter={() => setMouseIn(index)}
            onMouseLeave={() => setMouseIn(-1)}
            key={playlist.idAlbum}
            to={`/songs/${playlist.idAlbum}`}
            className={`w-[500px] h-[300px] flex flex-col gap-0 relative py-2.5 px-5 rounded-2xl z-0 duration-200 shadow-md shadow-gray-500`}
          >
            <img
              src={playlist.strAlbumThumb}
              className={`bg w-full h-full bg-gray-100 absolute left-0 top-0 rounded-2xl duration-200 z-[-1] object-cover`}
              style={{
                transform: active ? "scale(1.02)" : "scale(1)",
              }}
            />
            <div
              className="w-[30%] h-20 rounded-full absolute bottom-0 left-[30%] z-[-2] duration-200"
              style={{
                boxShadow: active
                  ? `0px 0px 40px 10px gray`
                  : "none",
              }}
            />
            <div
              className="flex flex-col gap-1 duration-300"
              style={{
                margin: active ? "12px 8px" : "8px 0",
              }}
            >
              <p className="font-[900] text-[32px] text-white z-[2] duration-200">
                {playlist.strArtist}
              </p>
              <p className="-mt-4 font-light text-[32px] text-white/50 z-[2]">
                {playlist.strAlbum}
              </p>
            </div>
            <button className="size-8 mt-auto mr-auto">
              <Play stroke="#fff" />
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export interface Album {
  idAlbum: string
  idArtist: string
  idLabel?: string
  strAlbum: string
  strAlbumStripped: string
  strArtist: string
  strArtistStripped: string
  intYearReleased: string
  strStyle?: string
  strGenre?: string
  strLabel?: string
  strReleaseFormat: string
  intSales: string
  strAlbumThumb?: string
  strAlbumThumbHQ: any
  strAlbumThumbBack?: string
  strAlbumCDart?: string
  strAlbumSpine?: string
  strAlbum3DCase?: string
  strAlbum3DFlat?: string
  strAlbum3DFace?: string
  strAlbum3DThumb?: string
  strDescriptionEN?: string
  strDescriptionDE: any
  strDescriptionFR?: string
  strDescriptionCN: any
  strDescriptionIT: any
  strDescriptionJP: any
  strDescriptionRU: any
  strDescriptionES?: string
  strDescriptionPT: any
  strDescriptionSE: any
  strDescriptionNL: any
  strDescriptionHU: any
  strDescriptionNO: any
  strDescriptionIL: any
  strDescriptionPL: any
  intLoved?: string
  intScore?: string
  intScoreVotes?: string
  strReview?: string
  strMood?: string
  strTheme?: string
  strSpeed?: string
  strLocation: any
  strMusicBrainzID: string
  strMusicBrainzArtistID: string
  strAllMusicID?: string
  strBBCReviewID?: string
  strRateYourMusicID?: string
  strDiscogsID?: string
  strWikidataID?: string
  strWikipediaID?: string
  strGeniusID?: string
  strLyricWikiID: any
  strMusicMozID: any
  strItunesID: any
  strAmazonID: any
  strLocked: string
  strDescription: any
}
