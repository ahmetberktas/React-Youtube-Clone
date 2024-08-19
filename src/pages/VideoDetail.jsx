import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";
import { getData } from "../helpers/getData";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const VideoDetail = () => {
  const { id } = useParams();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setRelated(null);
    getData(`/related?id=${id}`).then((res) => setRelated(res.data.data));
  }, [id]);

  return (
    <div className="p-4 min:p-6 min-h-screen flex max-lg:flex-col">
      <div className="flex-1">
        <ReactPlayer
          className={"rounded"}
          height={"500px"}
          width={"100%"}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        ></ReactPlayer>
        <VideoInfo></VideoInfo>
      </div>
      <div className="max-md:w-full lg:max-w-[300px] flex flex-col max-lg:my-5 px-3 gap-5">
        {!related ? (
          <Loading type={"video"}></Loading>
        ) : (
          related.map(
            (item) =>
              item.type === "video" && <VideoCard video={item}></VideoCard>
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
