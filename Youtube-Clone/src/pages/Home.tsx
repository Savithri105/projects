 import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"; 
import Spinner from "../components/Spinner";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducer/getHomepagevideos";

import type { HomePageVideos } from "../types";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.Youtube.videos);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

 
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
       
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
       
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-18 sm:gap-18 md:grid-cols-3 lg:p-10 lg:grid-cols-3  gap-x-4 gap-y-12 px-10 py-10 ">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}



