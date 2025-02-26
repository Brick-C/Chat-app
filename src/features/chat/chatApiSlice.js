import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all permission
export const createChat = createAsyncThunk(
  "chat/createChat",
  async (data, { rejectWithValue }) => {
    try {
      console.log("Sending chat data:", data);
      const response = await axios.post(
        "http://localhost:5050/api/v1/chat",
        data,
        {
          withCredentials: true,
        }
      );

      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Chat creation error:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
