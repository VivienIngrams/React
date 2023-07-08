import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post name={post.name} text={post.text} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Add the first one yourself!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
