import React from "react";
import Play from "../../svg/play";
import "./Playlist.css";
import { Link } from "react-router-dom";

export default function Playlists() {
  const [playlists, setPlaylists] = React.useState<Album[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [mouseIn, setMouseIn] = React.useState(-1);
  React.useEffect(() => {
    const data = fetch(
      "https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024",
    ).then((data) => {
      return data.json();
    });
    data.then((data) => {
      setPlaylists([data.album[0], data.album[1], data.album[2]]);
      setLoading(false);
    });
  }, []);
  return (
    <div className="playlists-container">
      {loading
        ? new Array(3)
            .fill(0)
            .map((val, ind) => <div key={val + ind} className="loader" />)
        : playlists.map((playlist, index) => {
            const active = mouseIn === index;
            return (
              <Link
                onMouseEnter={() => setMouseIn(index)}
                onMouseLeave={() => setMouseIn(-1)}
                key={playlist.idAlbum}
                to={`/songs/${playlist.idAlbum}`}
                className="playlist"
              >
                <img
                  src={playlist.strAlbumThumb}
                  style={{
                    transform: active ? "scale(1.02)" : "scale(1)",
                  }}
                />
                <div
                  className="shadow"
                  style={{
                    boxShadow: active ? `0px 0px 40px 10px gray` : "none",
                  }}
                />
                <div
                  className="text"
                  style={{
                    margin: active ? "12px 8px" : "8px 0",
                  }}
                >
                  <p className="artist">{playlist.strArtist}</p>
                  <p className="sub">{playlist.strAlbum}</p>
                </div>
                <button className="play">
                  <Play stroke="#fff" />
                </button>
              </Link>
            );
          })}
    </div>
  );
}

export interface Album {
  idAlbum: string;
  idArtist: string;
  idLabel?: string;
  strAlbum: string;
  strAlbumStripped: string;
  strArtist: string;
  strArtistStripped: string;
  intYearReleased: string;
  strStyle?: string;
  strGenre?: string;
  strLabel?: string;
  strReleaseFormat: string;
  intSales: string;
  strAlbumThumb?: string;
  strAlbumThumbHQ: any;
  strAlbumThumbBack?: string;
  strAlbumCDart?: string;
  strAlbumSpine?: string;
  strAlbum3DCase?: string;
  strAlbum3DFlat?: string;
  strAlbum3DFace?: string;
  strAlbum3DThumb?: string;
  strDescriptionEN?: string;
  strDescriptionDE: any;
  strDescriptionFR?: string;
  strDescriptionCN: any;
  strDescriptionIT: any;
  strDescriptionJP: any;
  strDescriptionRU: any;
  strDescriptionES?: string;
  strDescriptionPT: any;
  strDescriptionSE: any;
  strDescriptionNL: any;
  strDescriptionHU: any;
  strDescriptionNO: any;
  strDescriptionIL: any;
  strDescriptionPL: any;
  intLoved?: string;
  intScore?: string;
  intScoreVotes?: string;
  strReview?: string;
  strMood?: string;
  strTheme?: string;
  strSpeed?: string;
  strLocation: any;
  strMusicBrainzID: string;
  strMusicBrainzArtistID: string;
  strAllMusicID?: string;
  strBBCReviewID?: string;
  strRateYourMusicID?: string;
  strDiscogsID?: string;
  strWikidataID?: string;
  strWikipediaID?: string;
  strGeniusID?: string;
  strLyricWikiID: any;
  strMusicMozID: any;
  strItunesID: any;
  strAmazonID: any;
  strLocked: string;
  strDescription: any;
}
