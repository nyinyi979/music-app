import React from "react";
import Plus from "../svg/plusW.svg";
import Added from "../svg/check.svg";
import Play from "../svg/play";
import Pause from "../svg/pause.svg";
import Next from "../svg/next.svg";
import Prev from "../svg/previous.svg";
import Loop from "../svg/loop.svg";
import Sound from "../svg/sound.svg";
import SoundFull from "../svg/soundFull.svg";
import Playlist from "../svg/playlist.svg";
import Desktop from "../svg/desktop.svg";
import getDuration from "./duration";
import { Slider } from "./input/Slider";
import { useUserStore } from "../store/useUserData";

export default function Player() {
  const {
    songName,
    artist,
    added,
    duration,
    played,
    img,
    playing,
    volume,
    setVolume,
    setPlayed,
    toggleAdded,
    togglePlaying,
  } = useUserStore((store) => store);

  const currentTime = ((duration as number) * played[0]) / 100;
  const totalTime = React.useRef(getDuration(duration));
  return (
    <div className="player-container">
      <div className="flex player-img">
        <img className="img" src={img} />
        <div className="player-name">
          <span>{songName}</span>
          <span>{artist}</span>
        </div>
        <img
          className="player-add"
          onClick={() => toggleAdded(!added)}
          src={added ? Added : Plus}
        />
      </div>
      <div className="play-container">
        <div className="flex play-btns">
          <button className="size-6 play-btn">
            <img src={Prev} alt="previous" />
          </button>
          <button
            onClick={() => togglePlaying(!playing)}
            className="large-btn play-btn"
          >
            {playing ? <img src={Pause} alt="pause" /> : <Play stroke="#fff" />}
          </button>
          <button className="small-btn play-btn">
            <img src={Next} alt="next" />
          </button>
          <button className="small-btn">
            <img src={Loop} alt="loop" />
          </button>
        </div>
        <div className="flex playbar-con">
          <span>{getDuration(currentTime)}</span>
          <div className="playbar">
            <Slider value={played} onValueChange={setPlayed} />
          </div>
          <span>{totalTime.current}</span>
        </div>
        <div className="flex duration">
          <img src={Playlist} alt="playlists" className="xs-btn" />
          <img src={Desktop} alt="playlists" className="small-btn" />
          <div className="flex duration">
            <img
              src={volume[0] === 0 ? Sound : SoundFull}
              alt="sound"
              className="small-btn"
            />
            <p className="volume-slider">
              <Slider value={volume} onValueChange={setVolume} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
