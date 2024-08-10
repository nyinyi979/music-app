import { motion } from "framer-motion";
import { Switch } from "../input/Switch";
import { useUserStore } from "../../store/useUserData";
export default function Popup(){
  const {privateAccess, premiumRemaining, explicit, friend, setExplicit, setFriend, setPrivateAccess, logout} = useUserStore((state)=>state)
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 20 }}
      className="user-popup"
    >
      <div className="flex">
        <p className="tier">PREMIUM</p>
        <span>{premiumRemaining}</span>
      </div>
      <div className="flex">
        <p>Private</p>
        <Switch
          checked={privateAccess}
          onCheckedChange={setPrivateAccess}
          className="ml-auto"
        />
      </div>
      <div className="flex">
        <p>Friend Activity</p>
        <Switch
          checked={friend}
          onCheckedChange={setFriend}
          className="ml-auto"
        />
      </div>
      <div className="flex">
        <p>Explict Filter</p>
        <Switch
          checked={explicit}
          onCheckedChange={setExplicit}
          className="ml-auto"
        />
      </div>
      <p>Account Settings</p>
      <button onClick={logout} className="ml-auto text-gray-300">Log out</button>
    </motion.div>
  );
}
