import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/register",
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//register user using OTP
export const activateAccountByOtp = createAsyncThunk(
  "auth/activateAccountByOtp",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/activation-by-otp/${data.token}`,
        { otp: data.otp },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//register user using email
export const activateAccountByLink = createAsyncThunk(
  "auth/activateAccountByLink",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/activation-by-link/${data}`,

        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/login",
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/logout",
      "",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/auth/me", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Resend Activation
export const resendActivation = createAsyncThunk(
  "auth/resendActivation",
  async (auth) => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/auth/resend-activation/${auth}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Reset Password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/reset-password`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Reset Password Action
export const resetPasswordAction = createAsyncThunk(
  "auth/resetPasswordAction",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/reset-password-action/${data.token}`,
        data.input,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Upload User photo
export const uploadUserPhoto = createAsyncThunk(
  "auth/uploadUserPhoto",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/photo-edit/${data.id}`,
        data.data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
