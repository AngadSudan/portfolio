import { useState, useEffect } from "react";
const useAudio = (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((prev) => !prev);

  // Initialize audio instance
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio(url);
      newAudio.volume = 0.5; // <<— 50% VOLUME
      setAudio(newAudio);
    }
  }, [url]);

  // Play / Pause handler
  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio]);

  // Auto-stop when ended
  useEffect(() => {
    if (!audio) return;

    const handleEnded = () => setPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio]);

  return [playing, toggle] as const;
};

export default useAudio;