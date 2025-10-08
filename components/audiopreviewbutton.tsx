'use client'

import React, { useState, useRef } from 'react';
import { Button } from '@heroui/button';
import { Tooltip } from '@heroui/tooltip';

const AudioPreviewButton = ({ audioSrc }) => {
  // State to track whether the audio is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // Ref to access the audio element
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      // Stop the audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
      setIsPlaying(false);
    } else {
      // Play the audio
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
        });
    }
  };

  // Reset state when audio ends naturally
  const handleEnded = () => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0; // Reset to start
  };

  return (
    <div>
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
      <Tooltip showArrow={true} content={isPlaying ? 'Stop Preview' : 'Play Preview'}>
        <svg
            onClick={togglePlay}
            fill='none'
            height={25}
            width={25}
            viewBox='0 0 25 25'
            aria-label={isPlaying ? 'Stop Preview' : 'Play Preview'}>
                <image href={isPlaying ? '/logos/stop.svg' : '/logos/play.svg'}  width={25} height={25} />
        </svg>
      </Tooltip>
    </div>
  );
};

export default AudioPreviewButton;