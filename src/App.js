import './App.css';
import React, { Component } from 'react';
// =========================== CRUD Practice =========================

import "./App.css";
import "@fontsource/roboto";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost, updatePostname } from "./features/Posts";

function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.value);

  const [name, setName] = useState("");
  const [postname, setPostname] = useState("");
  const [newPostname, setNewPostname] = useState("");

  return (
    <div className="app-container">
    <div className="App">
      <h1> Posts</h1>
      <div className="box post-container">
        <h2>Create post</h2>
        <div className="addPost">
          <div className="post-input">
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Postname"
              onChange={(event) => {
                setPostname(event.target.value);
              }}
            />
          <button
            className='post-action-button'
            onClick={() => {
              dispatch(
                addPost({
                  id: postList[postList.length - 1].id + 1,
                  name,
                  postname,
                })
              );
            }}
          >
            {" "}
            Add Post
          </button>
        </div>
      </div>
    </div>
    <div>
      <h2>All post</h2>
      <div className="displayPosts">
        {postList.map((post) => {
          return (
            <div className='box'>
              <h2> {post.name}</h2>
              <p> {post.postname}</p>
              <input
                type="text"
                placeholder="Type to update post"
                onChange={(event) => {
                  setNewPostname(event.target.value);
                }}
              />
              <button
                className='post-action-button'
                onClick={() => {
                  dispatch(
                    updatePostname({ id: post.id, postname: newPostname })
                  );
                }}
              >
                {" "}
                Update Postname
              </button>
              <button
                className='post-action-button post-action-delete'
                onClick={() => {
                  dispatch(deletePost({ id: post.id }));
                }}
              >
                Delete Post
              </button>
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;