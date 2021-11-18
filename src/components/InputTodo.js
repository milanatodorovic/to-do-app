/*import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;*/

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
