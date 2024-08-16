import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch/${video.videoId}`)}
      className="p-4 cursor-pointer"
    >
      <div className="relative">
        <img
          className="w-full h-full object-contain rounded-lg"
          src={video.thumbnail[video.thumbnail.length - 1].url}
          alt="Video Thumbnail"
        />
        {/* <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded-sm">
          3:50
        </span> */}
      </div>
      <div className="flex mt-2">
        <img
          src={video.channelThumbnail[0].url}
          className="w-10 h-10 rounded-full"
          alt="Channel Profile"
        ></img>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-white leading-tight truncate">
            {video.title.length > 30
              ? `${video.title.substring(0, 30)}`
              : video.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{video.channelTitle}</p>
          <p className="text-xs text-gray-400">
            {millify(video.viewCount)} Görüntülenme • {video.publishedTimeText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
