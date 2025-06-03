import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoBackgroundProps {
  videoUrl: string;
  children?: React.ReactNode;
  className?: string;
}

export const VideoBackground = ({
  videoUrl,
  children,
  className = "",
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

   useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoad = () => {
        video.muted = isMuted;
        video.play().catch(error => {
          console.log("Autoplay failed:", error);
        });
      };
      video.addEventListener('loadeddata', handleLoad);
      return () => video.removeEventListener('loadeddata', handleLoad);
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        loop
        autoPlay
        muted={isMuted}
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Video controls */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <button
          onClick={togglePlayPause}
          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-white" />
          ) : (
            <Volume2 className="h-4 w-4 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};
