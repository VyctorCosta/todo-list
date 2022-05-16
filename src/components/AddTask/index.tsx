import React, { useState, useRef } from "react";
import { DivTask, Description, Date } from "./styles";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right.svg";
import { ReactComponent as ChevronDown } from "../../assets/img/chevron-down.svg";

interface AddTaskProps {
  insertNewTask?: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ insertNewTask }) => {
  const [classTask, setClassTask] = useState("");
  const taskRef = useRef<HTMLDivElement>(null);

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
    </DivTask>
  );
};

export default AddTask;
