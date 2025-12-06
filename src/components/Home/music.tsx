import useAudio from '@/hooks/useAudio'
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const Player = ({ url = "/genshin.mp3" }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="fixed top-9 right-28 z-50">
      <button
        onClick={toggle}
        className={`
          p-3 rounded-full transition-all duration-200 
          shadow-lg border border-white/20 backdrop-blur 
          ${playing ? "bg-green-500 text-white" : "bg-gray-800 text-gray-200"}
          hover:scale-110 active:scale-95
        `}
      >
        {playing ? <MdMusicNote size={22} /> : <MdMusicOff size={22} />}
      </button>
    </div>
  );
};

export default Player;
