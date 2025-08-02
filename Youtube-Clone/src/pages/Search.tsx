import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { HomePageVideos } from "../types";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducer/getSearchPagVideose";
import { clearVideos } from "../store";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchCard from "../components/SearchCard";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const videos = useAppSelector((state) => state.Youtube.videos);
  const searchTerm = useAppSelector((state) => state.Youtube.searchTerm);

 
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") {
      navigate("/");
    } else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      {/* Navbar */}
      <div style={{ height: "7.5vh" }}>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

   
      <div className="flex" style={{ height: "92.5vh" }}>
       
        <Sidebar
          isSidebarOpen={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />

      
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full overflow-auto">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
            >
              {videos.map((item: HomePageVideos) => (
                <div className="my-5" key={item.videoId}>
                  <SearchCard data={item} />
                </div>
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
