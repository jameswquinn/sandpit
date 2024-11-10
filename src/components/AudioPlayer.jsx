import { h } from 'preact';
import { useRef } from 'preact/hooks';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);

  const playAudio = () => audioRef.current.play();
  const pauseAudio = () => audioRef.current.pause();
  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioUrl} preload="auto" />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <button onClick={stopAudio}>Stop</button>
    </div>
  );
};

export default AudioPlayer;
