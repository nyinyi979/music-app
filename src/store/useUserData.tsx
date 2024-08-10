import { create } from "zustand";

type UserData = {
  songName: string;
  artist: string;
  added: boolean;
  duration: number;
  played: number[];
  img: string;
  playing: boolean;
  volume: number[];
  privateAccess: boolean;
  premiumRemaining: string;
  explicit: boolean;
  friend: boolean;
  tier: string;
  username: string;
};

type Actions = {
  setSongData: ({}: {
    songName: string;
    artist: string;
    duration: number | string;
  }) => void;
  togglePlaying: (playing: boolean) => void;
  toggleAdded: (added: boolean) => void;
  logout: () => void;
  setPrivateAccess: (privateAccess: boolean) => void;
  setExplicit: (explicit: boolean) => void;
  setFriend: (friend: boolean) => void;
  setVolume: (volume: number[]) => void;
  setPlayed: (played: number[]) => void;
};

export const useUserStore = create<UserData & Actions>((set) => ({
  added: true,
  artist: "Someone",
  duration: 240000,
  img: "https://www.theaudiodb.com/images/media/album/thumb/house-of-balloons-4ee693d4138bb.jpg",
  played: [0],
  playing: false,
  songName: "Click on one song",
  volume: [0],
  explicit: false,
  friend: false,
  premiumRemaining: "9/11",
  privateAccess: false,
  tier: "Premium",
  username: "Weekend fanboy",
  setSongData: ({
    artist,
    duration,
    songName,
  }: {
    songName: string;
    artist: string;
    duration: number | string;
  }) => {
    set(() => ({
      artist,
      duration: Number(duration),
      songName,
      playing: true,
    }));
  },
  togglePlaying: (playing: boolean) => {
    set(() => ({ playing }));
  },
  toggleAdded: (added: boolean) => {
    set(() => ({ added }));
  },
  logout: () => {
    set(() => ({ username: "N/A", tier: "Free" }));
  },
  setPrivateAccess: (privateAccess: boolean) => {
    set(() => ({ privateAccess }));
  },
  setExplicit: (explicit: boolean) => {
    set(() => ({ explicit }));
  },
  setFriend: (friend: boolean) => {
    set(() => ({ friend }));
  },
  setPlayed: (played) => {
    set(() => ({ played }));
  },
  setVolume: (volume) => {
    set(() => ({ volume }));
  },
}));
