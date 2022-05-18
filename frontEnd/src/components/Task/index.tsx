import React, { useState, useRef } from "react";
import { DivTask, Description, Date } from "./styles";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right.svg";
import { ReactComponent as ChevronDown } from "../../assets/img/chevron-down.svg";
import { ReactComponent as TrashSVG } from "../../assets/img/trash.svg";

interface TaskProps {
  taskInfo: string;
  index: number;
  removeTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ taskInfo, index, removeTask }) => {
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
      <div className="task-title">
        <div className="title-chevron" onClick={toggleClassTask}>
          <button className="arrow">{classTask ? <ChevronDown /> : <ChevronRight />}</button>
          <h2>Task Title {taskInfo}</h2>
        </div>
        <button className="trash" onClick={() => removeTask(index)}>
          <TrashSVG />
        </button>
      </div>
      {classTask ? (
        <>
          <hr className="line" />
          <Description>
            <h3>Description: </h3>
            <p>
              Lorem ipsum dolor sit amet. Et veniam velit cum tenetur iste qui eveniet voluptatem ex
              omnis eligendi et dolor.
            </p>
          </Description>
          <hr className="line" />
          <Date>
            <h3>Start date: </h3>
            <p>15/05 20:42</p>
          </Date>
          <hr className="line" />
          <Date>
            <h3>Finish date: </h3>
            <p>16/05 02:30</p>
          </Date>
        </>
      ) : (
        <></>
      )}
    </DivTask>
  );
};

export default Task;
