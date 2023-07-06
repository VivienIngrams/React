import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredText, setEnteredText] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeTextHandler(event) {
    setEnteredText(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredName(event.target.value);
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
        <Post author={enteredName} body={enteredText}  />
      </ul>
    </>
  );
}

export default PostsList;
