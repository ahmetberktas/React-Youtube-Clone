import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex gap-3">
      <SideBar></SideBar>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {!videos ? (
            <Loading type={"video"}></Loading>
          ) : (
            videos.map(
              (item) =>
                item.type === "video" && (
                  <VideoCard key={item.videoId} video={item}></VideoCard>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
