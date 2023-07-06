import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList(props) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeTextHandler(event) {
    setEnteredText(event.target.Value);
  }

  function changeNameHandler(event) {
    setEnteredName(event.target.Value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onChangeText={changeTextHandler}
          onChangeName={changeNameHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredName} body={enteredText} />
        <Post />
      </ul>
    </>
  );
}

export default PostsList;
