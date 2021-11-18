// hooks !!

import React, { useState } from "react";

const InputTodo = (props) => {
  const [tittle, setTittle] = useState("");

  const onChange = (e) => {
    setTittle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tittle.trim()) {
      props.addTodoProps(tittle);
      setTittle("");
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={tittle}
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
