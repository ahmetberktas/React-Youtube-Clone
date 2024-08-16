import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";

const VideoDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-4 min:p-6 min-h-screen flex max-lg:flex-col">
      <div className="flex-1">
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        ></ReactPlayer>
        <VideoInfo></VideoInfo>
      </div>
      <div>Alakalı diğer videolar</div>
    </div>
  );
};

export default VideoDetail;
