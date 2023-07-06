
import classes from './NewPost.module.css';

function NewPost(props) {


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={props.onChangeText} id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input onChange={props.onChangeName} type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;