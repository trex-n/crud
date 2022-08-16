import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../FakeData";

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },

    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },

    updatePostname: (state, action) => {
      state.value.map((post) => {
        if (post.id === action.payload.id) {
          post.postname = action.payload.postname;
        }
      });
    },
  },
});

export const { addPost, deletePost, updatePostname } = postSlice.actions;
export default postSlice.reducer;