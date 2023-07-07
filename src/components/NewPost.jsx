import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeTextHandler(event) {
    setEnteredText(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      text: enteredText,
      name: enteredName
    }
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" required rows={3} onChange={changeTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
