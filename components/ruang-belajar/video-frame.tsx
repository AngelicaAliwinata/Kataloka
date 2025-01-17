import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

export interface VideoFrameProps {
  videoUrl: string;
}

export const VideoFrame = ({ videoUrl }: VideoFrameProps) => {
  
  const [playing, setPlaying] = useState(false);
  const videoId = videoUrl.split("v=")[1]?.split("&")[0]; 

  const onPlay = () => {
    setPlaying(true);
    
  };

  const onPause = () => {
    setPlaying(false);
  };

  return (
    <TouchableOpacity
      style={{
        width: 160,
        height: 160,
        borderRadius: 10,
        padding: 16,
        overflow: "hidden",
        position: "relative",
        opacity: 1,
        backgroundColor: Colors.beige,
        borderColor: hexToRgba(Colors["dark-green"], 0.25),
        elevation: 2,
        alignItems: "center",
      }}
    >
      <YoutubeIframe
        videoId={videoId}
        play={playing}
        onChangeState={(event) => {
          if (event === "playing") onPlay();
          if (event === "paused") onPause();
        }}
        height={146}
        width={146}
        webViewStyle={{
          width: 146,
          height: 146,
          aspectRatio: 1,
        }}
      />
    </TouchableOpacity>
  );
};
