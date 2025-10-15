import { title } from "@/components/primitives";

import useAudioPlayer from "@/actions/useAudioPlayer";
import AudioPlayer from '@/components/audioplayer';


export default function PlaybackPreview() {
  return (
    <div>
      <h1 className={title()}>Playback Preview</h1>
      <div>
        <AudioPlayer audioUrl='https://l0ooywyaxp0nribh.public.blob.vercel-storage.com/audio/Amazing%20Grace%20%28arr%20pfH%29%20-%20DEMO.mp3' />
      </div>
    </div>
  );
};
