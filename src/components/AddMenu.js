import axios from "axios";
import { useState } from "react";

function AddMenu() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/inforyou?owners", {
      title,
      body,
    });
  };

  return (
    <>
      <label>메뉴추가</label>
      <input value={title} onChange={onTitleChange} />
      <label>메뉴상세설명</label>
      <textarea value={body} onChange={onBodyChange} rows="10" />
      <button onClick={onSubmit}>post</button>
    </>
  );
}
export default AddMenu;
