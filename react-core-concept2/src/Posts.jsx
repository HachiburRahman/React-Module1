import React, { use } from "react";
import Post from "./Post";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  return (
    <div>
      <h3>No of Posts:{posts.length}</h3>
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
};

export default Posts;
