import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "..";
import type { RecommendedVideos } from "../../types";
import { parseRecommendedData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "Youtube/getRecommendedVideos",
  async (videoId: string, { getState }) => {
 const {
  Youtube: { currentPlaying },
} = getState() as RootState;

if (!currentPlaying || !currentPlaying.channelInfo) {
  throw new Error("No current video or channel info available");
}

const {
  channelInfo: { id: channelId },
} = currentPlaying;


    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] = await parseRecommendedData(
      items,
      videoId
    );

    return { parsedData };
  }
);