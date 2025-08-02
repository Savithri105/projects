import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "..";
import type { HomePageVideos } from "../../types";
import { parseData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;


if (!API_KEY) {
  throw new Error("YouTube API key is missing. Please check your environment variables.");
}

export const getHomePageVideos = createAsyncThunk(
  "Youtube/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      Youtube: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;

    try {
      const response = await axios.get(`${YOUTUBE_API_URL}/search`, {
        params: {
          maxResults: 20,
          q: "react + typescript tutorials",
          key: API_KEY,
          part: "snippet",
          type: "video",
         
          ...(isNext && { pageToken: nextPageTokenFromState }),
        },
      });
 

const parsedData: HomePageVideos[] = await parseData(response.data.items);
  console.log(parsedData)
      
      return {
        parsedData: [...videos, ...parsedData],
        nextPageToken: response.data.nextPageToken,
      };
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      throw error;
    }
  }
);