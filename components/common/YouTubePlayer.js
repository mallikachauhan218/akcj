import React, { useState } from "react";
import YouTube from "react-youtube";
import { Autoplay } from "swiper/modules";

// Function to extract YouTube video ID from a URL
const extractVideoId = (url) => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:v\/|.*[?&]v=)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const YouTubePlayer = ({ defaultLink }) => {
  // Use extractVideoId only after it's defined
  const [videoId, setVideoId] = useState(extractVideoId(defaultLink));
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePlayVideo = () => {
    const id = extractVideoId(inputValue);
    if (id) {
      setVideoId(id);
    } else {
      alert("Invalid YouTube link!");
    }
  };

  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
