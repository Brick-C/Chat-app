import { createSlice } from "@reduxjs/toolkit";
import {
  activateAccountByLink,
  activateAccountByOtp,
  createUser,
  getLoggedInUser,
  loginUser,
  logoutUser,
  resendActivation,
  resetPassword,
  resetPasswordAction,
  uploadUserPhoto,
} from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setLogout: (state) => {
      state.message = null;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = null;
        localStorage.removeItem("user");
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      //Activation code(OTP)
      .addCase(activateAccountByOtp.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(activateAccountByOtp.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(activateAccountByOtp.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
        state.user = action.payload;
      })

      //Activation code(LINK)
      .addCase(activateAccountByLink.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(activateAccountByLink.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(activateAccountByLink.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })

      //Resend activation
      .addCase(resendActivation.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(resendActivation.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(resendActivation.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })

      //Reset Password
      .addCase(resetPassword.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })

      //Reset Password Action
      .addCase(resetPasswordAction.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(resetPasswordAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(resetPasswordAction.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })

      //Upload Profile Photo
      .addCase(uploadUserPhoto.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(uploadUserPhoto.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(uploadUserPhoto.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
        state.user = action.payload.user;
      });
  },
});

// selectors
export const getAuthData = (state) => state.auth;
// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
