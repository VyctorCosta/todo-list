import React, { useState } from "react";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import GlobalStyle from "../styles/GlobalStyle";
import { DivApp, DivTasks } from "./styles";

const App: React.FC = () => {
  const [arrayTasks, setArrayTasks] = useState(["1", "2", "3", "4", "5", "6", "7"]);

  const removeTask = (id: number) => {
    setArrayTasks(arrayTasks.filter((task, index) => index !== id));
  };

  return (
    <>
      <GlobalStyle />
      <DivApp>
        <h1 className="title">TO DO LIST</h1>
        <DivTasks>
          {arrayTasks.map((task, index) => (
            <Task key={index} index={index} taskInfo={task} removeTask={removeTask} />
          ))}
        </DivTasks>
        <AddTask />
      </DivApp>
    </>
  );
};

export default App;
