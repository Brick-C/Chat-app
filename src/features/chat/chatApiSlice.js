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

//get user to user chat
export const getUserToUserChat = createAsyncThunk(
  "chat/getUserToUserChat",
  async () => {
    const senderId = req.me._id;
    const receiverId = req.params.id;

    console.log("Backend Log - getUserToUserChat controller started"); // <--- ADD LOG: Controller started
    console.log("Backend Log - senderId (logged-in user):", senderId); // <--- ADD LOG: Logged-in senderId
    console.log("Backend Log - receiverId (from params):", receiverId); // <--- ADD LOG: receiverId from params

    if (!receiverId) {
      console.log("Backend Log - Error: Receiver ID is missing in parameters!"); // <--- ADD LOG: ReceiverId missing error
      return res.status(400).json({ message: "Receiver ID is required." });
    }

    try {
      console.log("Backend Log - Attempting to query chats from database..."); // <--- ADD LOG: Before DB query
      const chats = await Chat.find({
        $or: [
          { senderId: senderId, receiverId: receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      }).sort({ createdAt: 1 });

      console.log("Backend Log - Database query completed successfully."); // <--- ADD LOG: Query successful
      console.log("Backend Log - Number of chats found:", chats.length); // <--- ADD LOG: Number of chats found
      console.log("Backend Log - Chats data (before sending response):", chats); // <--- ADD LOG: Chats data itself

      res.status(200).json({ chats });
      console.log("Backend Log - Response sent successfully to frontend."); // <--- ADD LOG: Response sent
    } catch (error) {
      console.error("Backend Log - Error fetching chats from database:", error); // <--- ADD LOG: Error during query
      res
        .status(500)
        .json({ message: "Error fetching chats", error: error.message });
    }
    console.log("Backend Log - getUserToUserChat controller finished.");
  }
);
