import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import GlobalStyle from "../styles/GlobalStyle";
import { DivApp, DivTasks } from "./styles";
import axios from "axios";

type ArrayTasks = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  startTime: string;
  finishDate: string;
  finishTime: string;
}[];

const App: React.FC = () => {
  const [arrayTasks, setArrayTasks] = useState([] as ArrayTasks);

  const getTasks = async () => {
    axios
      .get("http://localhost:3001/task")
      .then((response) => setArrayTasks(response.data.data))
      .catch((error) => console.log(error));
  };

  const removeTask = (id: string, index: number) => {
    setArrayTasks(arrayTasks.filter((task, i) => index !== i));
    axios.delete(`http://localhost:3001/task/${id}`);
  };

  const insertNewTask = async (
    name: string,
    description: string,
    startDate: string,
    startTime: string,
    finishDate: string,
    finishTime: string
  ) => {
    const task = { name, description, startDate, startTime, finishDate, finishTime };
    axios.post("http://localhost:3001/task", task).then(getTasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <GlobalStyle />
      <DivApp>
        <h1 className="title">TO DO LIST</h1>
        <DivTasks>
          {arrayTasks.map(
            ({ id, name, description, startDate, startTime, finishDate, finishTime }, index) => (
              <Task
                key={id}
                id={id}
                name={name}
                description={description}
                startDate={startDate}
                startTime={startTime}
                finishDate={finishDate}
                finishTime={finishTime}
                removeTask={removeTask}
                index={index}
              />
            )
          )}
        </DivTasks>
        <AddTask insertNewTask={insertNewTask} />
      </DivApp>
    </>
  );
};

export default App;
