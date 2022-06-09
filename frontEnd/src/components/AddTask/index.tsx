import React, { useState, useRef } from "react";
import { ButtonTask, DivTask, Description, DivDate, TaskName } from "./styles";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right.svg";
import { ReactComponent as ChevronDown } from "../../assets/img/chevron-down.svg";

interface AddTaskProps {
  insertNewTask: (
    name: string,
    description: string,
    startDate: string,
    startTime: string,
    finishDate: string,
    finishTime: string
  ) => Promise<void>;
}

const AddTask: React.FC<AddTaskProps> = ({ insertNewTask }) => {
  const [classTask, setClassTask] = useState("");
  const taskRef = useRef<HTMLDivElement>(null);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date()); // Date.now() - 3600 * 3 * 1000
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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const [finishHour, finishMinutes] = taskDuration.split(":");
            const finishDate = new Date(
              startDate.valueOf() +
                (3600 * Number(finishHour) * 1000 + 60 * Number(finishMinutes) * 1000)
            );
            const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`;
            const finishTime = `${finishDate.getHours()}:${finishDate.getMinutes()}`;
            insertNewTask(
              taskName,
              description,
              startDate.toLocaleDateString(),
              startTime,
              finishDate.toLocaleDateString(),
              finishTime
            );
            setTaskName("");
            setDescription("");
            setStartDate(new Date());
            setTaskDuration("");
          }}
        >
          <hr />
          <TaskName>
            <h3>Task name:</h3>
            <input
              placeholder="task name"
              value={taskName}
              onChange={({ target }) => setTaskName(target.value)}
              required
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
                value={description}
                required
              />
            </div>
          </Description>
          <hr />
          <DivDate>
            <h3>Start date:</h3>
            <input
              placeholder="xx/xx, xx:xx"
              onChange={({ target }) => setStartDate(new Date(target.value))}
              type="datetime-local"
              className="start-date"
              defaultValue={new Date(Date.now() - 3600 * 3 * 1000).toISOString().slice(0, 16)}
              required
            ></input>
          </DivDate>
          <hr />
          <DivDate className="task-duration">
            <h3>Task duration:</h3>
            <input
              placeholder="xx:xx"
              value={taskDuration}
              onChange={({ target }) => setTaskDuration(target.value)}
              required
              pattern="[0-9][0-9]:[0-9][0-9]"
            ></input>
          </DivDate>
          <hr />
          <ButtonTask type="submit">Send task</ButtonTask>
        </form>
      ) : (
        ""
      )}
    </DivTask>
  );
};

export default AddTask;
