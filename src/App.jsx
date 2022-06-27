import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompliteTods } from "./components/IncompliteTodos";
import "./styles.css";
import { CompliteTodos } from "./components/CompliteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompliteTodos, setIncompliteTodos] = useState([]);
  const [compliteTodos, setCompliteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompliteTodos, todoText];
    setIncompliteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompliteTodos];
    newTodos.splice(index, 1);
    setIncompliteTodos(newTodos);
  };

  const onClickComplite = (index) => {
    const newIncompliteTodos = [...incompliteTodos];
    newIncompliteTodos.splice(index, 1);

    const newCompliteTodos = [...compliteTodos, incompliteTodos[index]];
    setIncompliteTodos(newIncompliteTodos);
    setCompliteTodos(newCompliteTodos);
  };

  const onClikBack = (index) => {
    const newCompliteTodos = [...compliteTodos];
    newCompliteTodos.splice(index, 1);

    const newIncompliteTodos = [...incompliteTodos, compliteTodos[index]];
    setIncompliteTodos(newIncompliteTodos);
    setCompliteTodos(newCompliteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disable={incompliteTodos.length >= 5}
      />
      {incompliteTodos.length >= 5 && <p>登録できるtodoは5個まで</p>}
      <IncompliteTods
        todos={incompliteTodos}
        onClickComplite={onClickComplite}
        onClickDelete={onClickDelete}
      />
      <CompliteTodos todos={compliteTodos} onClikBack={onClikBack} />
    </>
  );
};
