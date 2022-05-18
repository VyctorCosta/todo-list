import React, { useState, useRef } from "react";
import { ButtonTask, DivTask, Description, Date, TaskName } from "./styles";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right.svg";
import { ReactComponent as ChevronDown } from "../../assets/img/chevron-down.svg";

interface AddTaskProps {
  insertNewTask?: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ insertNewTask }) => {
  const [classTask, setClassTask] = useState("");
  const taskRef = useRef<HTMLDivElement>(null);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [taskDuration, setTaskDuration] = useState("");

  const toggleClassTask = () => {
    if (classTask === "") {
      setClassTask("open");
      if (taskRef.current) taskRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else setClassTask("");
  };

  return (
    <DivTask ref={taskRef} className={classTask}>
      <div className="title-chevron" onClick={toggleClassTask}>
        <button className="arrow">{classTask ? <ChevronDown /> : <ChevronRight />}</button>
        <h2>Add new task</h2>
      </div>
      {classTask ? (
        <>
          <hr />
          <TaskName>
            <h3>Task name:</h3>
            <input
              placeholder="task name"
              onChange={({ target }) => setTaskName(target.value)}
            ></input>
          </TaskName>
          <hr />
          <Description>
            <h3>Description:</h3>
            <div className="input">
              <textarea
                id="input-description"
                placeholder="task description"
                onChange={({ target }) => setDescription(target.value)}
              />
            </div>
          </Description>
          <hr />
          <Date>
            <h3>Start date:</h3>
            <input
              placeholder="xx/xx, xx:xx"
              onChange={({ target }) => setStartDate(target.value)}
            ></input>
          </Date>
          <hr />
          <Date className="task-duration">
            <h3>Task duration:</h3>
            <input
              placeholder="xx/xx, xx:xx"
              onChange={({ target }) => setTaskDuration(target.value)}
            ></input>
          </Date>
          <hr />
          <ButtonTask
            onClick={() => {
              //Função enviar dados pro backend
            }}
          >
            Send task
          </ButtonTask>
        </>
      ) : (
        ""
      )}
    </DivTask>
  );
};

export default AddTask;
