import { createSlice } from "@reduxjs/toolkit";
import {
  createPermission,
  createRole,
  deletePermission,
  getAllPermission,
  getAllRoles,
  getAllUser,
  updatePermissionStateData,
  updateRole,
  userCreate,
} from "./userApiSlice";

// create auth slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
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
    builder

      // .addCase(deletePermission.fulfilled, (state, action) => {
      //   state.permission = state.permission.filter(
      //     (data) => data._id !== action.payload.permission._id
      //   );
      //   state.message = action.payload.message;
      // })
      // .addCase(updatePermissionStateData.rejected, (state, action) => {
      //   state.error = action.error.message;
      // })
      // .addCase(updatePermissionStateData.fulfilled, (state, action) => {
      //   state.permission[
      //     state.permission.findIndex(
      //       (data) => data._id == action.payload.permission._id
      //     )
      //   ] = action.payload.permission;
      //   state.message = action.payload.message;
      // })
      // .addCase(getAllRoles.rejected, (state, action) => {
      //   state.error = action.error.message;
      // })
      // .addCase(getAllRoles.fulfilled, (state, action) => {
      //   state.role = action.payload;
      // })
      // .addCase(createRole.rejected, (state, action) => {
      //   state.error = action.error.message;
      // })
      // .addCase(createRole.fulfilled, (state, action) => {
      //   state.role = state.role ?? [];
      //   state.message = action.payload.message;
      //   state.role.push(action.payload.role);
      // })
      // .addCase(updateRole.rejected, (state, action) => {
      //   state.error = action.error.message;
      // })
      // .addCase(updateRole.fulfilled, (state, action) => {
      //   state.message = action.payload.message;
      //   state.role[
      //     state.role.findIndex((data) => data._id == action.payload.role._id)
      //   ] = action.payload.role;
      // })

      .addCase(getAllUser.fulfilled, (state, action) => {
        state.users = action.payload.users;
      });
    // .addCase(userCreate.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
    // .addCase(userCreate.fulfilled, (state, action) => {
    //   state.message = action.payload.message;
    //   state.user = state.user ?? [];
    //   state.user.push(action.payload.user);
    // });
  },
});

// selectors
export const getAllPermissionData = (state) => state.user;
// actions
export const { setMessageEmpty } = userSlice.actions;

// export
export default userSlice.reducer;
