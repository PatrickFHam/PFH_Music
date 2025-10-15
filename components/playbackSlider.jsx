import { useState, useEffect } from 'react';
import { Slider } from '@heroui/slider';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const PlaybackSlider = ({ duration, currentTime, seek, play, pause, isPlaying }) => {
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [wasPlaying, setWasPlaying] = useState(false);

  useEffect(() => {
    if (!isSeeking) {
      setSliderValue(currentTime);
    }
  }, [currentTime, isSeeking]);

  /* const handleSeekStart = () => {
    //setWasPlaying(isPlaying);
    pause();
    setIsSeeking(true);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  }; */


  const newSliderChange = (value) => {
    setWasPlaying(isPlaying);
    setIsSeeking(true);
    setSliderValue(value);
  };


  const handleSeekEnd = (value) => {
      seek(value);
      if (wasPlaying) {
          play();
      setIsSeeking(false);
    }
  };



  const displayTime = isSeeking ? sliderValue : currentTime;

  return (
    <>
      <span className="text-sm text-gray-500">{formatTime(displayTime)}</span>
      <Slider
        aria-label="Playback Progress"
        //onChangeStart={handleSeekStart}
        onChange={newSliderChange}
        onChangeEnd={handleSeekEnd}
        minValue={0}
        maxValue={duration}
        step={1}
        value={displayTime}
        color="primary"
        className="flex-grow"
      />
      <span className="text-sm text-gray-500">{formatTime(duration)}</span>
    </>
  );
};

export default PlaybackSlider;