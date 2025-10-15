import { useState, useEffect, useRef } from 'react';

const useAudioPlayer = (audioUrl) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1); // New volume state, initialized to 1
  const audioRef = useRef(null);

  // Initialize and manage the audio element
  useEffect(() => {
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    // Clean up on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [audioUrl]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const seek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };
  
  // New function to handle volume changes
  const changeVolume = (value) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100; // Convert slider value (0-100) to audio volume (0-1)
      setVolume(value / 100);
    }
  };

  return { isPlaying, duration, currentTime, volume, play, pause, seek, changeVolume };
};


export default useAudioPlayer;
