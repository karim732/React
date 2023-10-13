import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onToggleModal }) {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (postData) => {
    setPosts((prevPosts) => [...prevPosts, postData]);
  };
  return (
    <>
      {isPosting && (
        <Modal onClose={onToggleModal}>
          <NewPost onCancel={onToggleModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
