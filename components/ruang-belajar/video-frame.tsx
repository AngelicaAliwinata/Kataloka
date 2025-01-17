import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube'; 

export interface VideoFrameProps {
  videoUrl: string;
  status: "watched" | "unwatched";
}

export const VideoFrame = ({
  videoUrl,
  status = "unwatched",
}: VideoFrameProps) => {
  const [watched, setWatched] = useState(status === "watched");
  const videoId = videoUrl.split('v=')[1]; 

  const onStart = () => {
    setWatched(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: 178,
          height: 170,
          borderRadius: 10,
          padding: 16,
          overflow: "hidden",
          position: "relative",
          opacity: watched ? 0.7 : 1, // Conditionally set opacity
        }}
        onPress={() => setWatched(!watched)} // Toggle watched state
      >
        {/* <YouTube apiKey={process.env.EXPO_PUBLIC_YOUTUBE_API_KEY} onReady={onStart} videoId={videoId}></YouTube> */}
      </TouchableOpacity>
    </View>
  );
};
