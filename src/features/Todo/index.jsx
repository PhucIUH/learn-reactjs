import React from "react";
import PropTypes from "prop-types";
import TodoList from "../Todo/components/TodoList/index";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Drink",
    },
    {
      id: 3,
      title: "Code",
    },
  ];
  return (
    <div>
      <h3>This is Todo List</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
