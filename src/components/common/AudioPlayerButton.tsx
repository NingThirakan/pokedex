import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
};

export const AudioPlayerButton = ({ src }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio?.addEventListener("ended", handleEnd);
    return () => {
      audio?.removeEventListener("ended", handleEnd);
    };
  }, []);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={handlePlay}>
        {isPlaying ? <PauseCircle /> : <PlayCircle />}
      </IconButton>
      <Typography variant="subtitle2">
        {isPlaying ? "Playing..." : "Paused"}
      </Typography>
      <audio ref={audioRef} src={src} />
    </Box>
  );
};
