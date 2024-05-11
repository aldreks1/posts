// PostList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/actions";
import Post from "./Post";
import ResizableTextarea from "./ResizableTextarea";

const PostList = ({ posts, addPost }) => {
  const [newPostText, setNewPostText] = useState("");

  const handleAddPost = () => {
    if (newPostText.trim() !== "") {
      const newPost = {
        id: Date.now(),
        title: newPostText.trim(),
        comments: [],
      };
      addPost(newPost);
      setNewPostText("");
    }
  };

  const sortedPosts = [...posts].reverse();

  return (
    <div className="post-list">
      <div className="post-list__controls primary-wrapper">
        <ResizableTextarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="Новый пост ..."
          className="primary-text"
        />
        <button className="primary-btn primary-text" onClick={handleAddPost}>
          Добавить
        </button>
      </div>
      <div className="posts">
        {sortedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { addPost })(PostList);
