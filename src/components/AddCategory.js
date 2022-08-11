import { useState } from "react";
import "./AddCategory.css";

function AddCategory() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit} className="AddCategory">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="그룹 추가"
      />
    </form>
  );
}

export default AddCategory;
