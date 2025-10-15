'use client'

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Slider } from "@heroui/slider";
import { Card, CardHeader, CardBody } from "@heroui/card";

import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import useAudioPlayer from "../actions/useAudioPlayer";
import PlaybackSlider from "../components/playbackSlider";


const AudioPlayer = ({ audioUrl }) => {
  const { isPlaying, duration, currentTime, volume, play, pause, seek, changeVolume } = useAudioPlayer(audioUrl);
  
  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const volumeSliderValue = volume * 100;

  return (
    <Card className="max-w-md mx-auto p-4">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">MP3 Player</h2>
      </CardHeader>
      <CardBody className="mt-4 space-y-4">
        <div className="flex items-center justify-center">
          <Button
            isIconOnly
            size="lg"
            variant="solid"
            color="primary"
            onClick={togglePlayPause}
          >
            {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <PlaybackSlider 
            duration={duration} 
            currentTime={currentTime} 
            seek={seek} 
            play={play} 
            pause={pause} 
            isPlaying={isPlaying} 
          />
        </div>
        <div className="flex items-center gap-2">
          {volume > 0 ? <SpeakerWaveIcon className="w-5 h-5 text-gray-500" /> : <SpeakerXMarkIcon className="w-5 h-5 text-gray-500" />}
          <Slider
            aria-label="Volume Control"
            value={volumeSliderValue}
            onChange={changeVolume}
            maxValue={100}
            step={1}
            color="primary"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default AudioPlayer;
