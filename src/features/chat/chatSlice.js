import { createSlice } from "@reduxjs/toolkit";
import { getUserToUserChat } from "./chatApiSlice";

// create auth slice
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserToUserChat.fulfilled, (state, action) => {
      state.chats = action.payload.chats;
    });
  },
});

// selectors
export const getAllChatData = (state) => state.chat;
// actions
export const { setMessageEmpty } = chatSlice.actions;

// export
export default chatSlice.reducer;
