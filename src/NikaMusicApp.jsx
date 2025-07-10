import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { motion } from "framer-motion";

const songs = [
  {
    title: "Song One",
    artist: "Artist A",
    url: "/songs/song1.mp3",
  },
  {
    title: "Song Two",
    artist: "Artist B",
    url: "/songs/song2.mp3",
  },
];

export default function NikaMusicApp() {
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  const currentSong = songs[currentSongIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <motion.div
        className="text-white text-4xl font-bold mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        NIKA Music
      </motion.div>

      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="flex flex-col items-center p-6">
          <div className="text-xl font-semibold text-center text-white">
            {currentSong.title}
          </div>
          <div className="text-sm text-gray-300 mb-4">{currentSong.artist}</div>

          <audio ref={audioRef} src={currentSong.url} onEnded={nextSong} />

          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={prevSong}>
              <SkipBack className="w-6 h-6" />
            </Button>
            <Button variant="ghost" onClick={playPause}>
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <Button variant="ghost" onClick={nextSong}>
              <SkipForward className="w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
