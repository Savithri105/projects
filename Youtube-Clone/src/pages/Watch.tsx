import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WatchCard from "../components/WatchCard";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducer/getRecommendedVideos";
import { getVideoDetails } from "../store/reducer/getVideoDetails";

import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export default function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev); 

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector((state) => state.Youtube.currentPlaying);
  const recommendedVideos = useAppSelector((state) => state.Youtube.recommendedVideos);

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideos(id));
    }
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
         
          <div style={{ height: "7.5vh" }}>
            <Navbar toggleSidebar={toggleSidebar} />
          </div>

         
          <div className="flex w-full" style={{ height: "92.5vh" }}>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0 w-full overflow-auto">
              <div style={{ maxWidth: "800px" }}>
                <div>
                  <iframe
                    width="800"
                    height="502"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <div className="mt-5">
                    <p className="text-xl">{currentPlaying.videoTitle}</p>
                    <div className="flex justify-between mt-1">
                      <div className="text-sm text-gray-400">
                        <span className="after:content-['•'] after:mx-1">
                          {currentPlaying.videoViews} views
                        </span>
                        <span>{currentPlaying.videoAge} ago</span>
                      </div>

                      <div className="flex items-center gap-4 uppercase">
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiLike className="text-xl" />
                          <strong>{currentPlaying.videoLikes}</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiDislike className="text-xl" />
                          <strong>dislike</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <FaShare className="text-xl" />
                          <strong>share</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <HiScissors className="text-xl" />
                          <strong>clip</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <MdOutlinePlaylistAdd className="text-xl" />
                          <strong>save</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BsThreeDots className="text-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                      <div className="flex items-center gap-5 mr-5 mt-4">
                        <img
                          src={currentPlaying.channelInfo.image}
                          alt=""
                          className="rounded-full h-12 w-12"
                        />
                        <div className="w-5/6">
                          <h5 className="text-sm font-bold">{currentPlaying.channelInfo.name}</h5>
                          <h6 className="text-gray-400 text-xs">
                            {currentPlaying.channelInfo.subscribers} subscribers
                          </h6>
                        </div>
                        <button className="uppercase bg-red-600 rounded-sm p-2 text-sm tracking-wider">
                          subscribe
                        </button>
                      </div>

                      <div
                        className={`${
                          !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                        } text-sm w-11/12`}
                      >
                        <pre
                          className="whitespace-pre-wrap"
                          style={{ fontFamily: `"Roboto", sans-serif` }}
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </div>

                      <button
                        className="uppercase text-sm cursor-pointer"
                        onClick={() => setShowMoreStatus(!showMoreStatus)}
                      >
                        Show {showMoreStatus ? "less" : "more"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Videos */}
              <div className="mr-24 flex flex-col gap-3">
                {recommendedVideos.map((item) => (
                  <WatchCard data={item} key={item.videoId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
