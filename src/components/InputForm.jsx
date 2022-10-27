import './InputForm.css';
import {useState} from "react";

export const InputForm = (props) => {
  const [author, setAuthor] = useState("");
  const [msg, setMsg] = useState("");
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const handleChangeMsg = (e) => {
    setMsg(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({'author': author, 'message': msg});
  }
  return <form className="msg-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label>Author</label>
      <input type="text" value={author} onChange={handleChangeAuthor}/>
    </div>
    <div className="form-row">
      <label>Message</label>
      <input type="text" value={msg} onChange={handleChangeMsg}/>
    </div>
    <button type="submit">Submit</button>
  </form>
}