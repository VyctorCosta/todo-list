import React, { useState, useRef } from "react";
import { DivTask, Description, DivDate } from "./styles";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right.svg";
import { ReactComponent as ChevronDown } from "../../assets/img/chevron-down.svg";
import { ReactComponent as TrashSVG } from "../../assets/img/trash.svg";

interface TaskProps {
  id: string;
  name: string;
  description: string;
  startDate: string;
  startTime: string;
  finishDate: string;
  finishTime: string;
  removeTask: (id: string, index: number) => void;
  index: number;
}

const Task: React.FC<TaskProps> = ({
  id,
  name,
  description,
  startDate,
  startTime,
  finishDate,
  finishTime,
  removeTask,
  index,
}) => {
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
          <h2>{name}</h2>
        </div>
        <button className="trash" onClick={() => removeTask(id, index)}>
          <TrashSVG />
        </button>
      </div>
      {classTask ? (
        <>
          <hr className="line" />
          <Description>
            <h3>Description: </h3>
            <p>{description}</p>
          </Description>
          <hr className="line" />
          <DivDate>
            <h3>Start date: </h3>
            <p>
              {(() => {
                let date = startDate.slice(5).replace("-", "/");
                date = `${date.slice(3)}/${date.slice(0, 2)}`;
                return `${date} ${startTime.slice(0, -3)}`;
              })()}
            </p>
          </DivDate>
          <hr className="line" />
          <DivDate>
            <h3>Finish date: </h3>
            <p>
              {(() => {
                let date = finishDate.slice(5).replace("-", "/");
                date = `${date.slice(3)}/${date.slice(0, 2)}`;
                return `${date} ${finishTime.slice(0, -3)}`;
              })()}
            </p>
          </DivDate>
        </>
      ) : (
        <></>
      )}
    </DivTask>
  );
};

export default Task;
