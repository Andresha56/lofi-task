import IconButton from "./IconButton";
import { StyledTask } from "../styles/Task.styled";
import { ITask } from "../types";

interface Props {
  task: ITask;
  onDelete: Function;
  onToggle: Function;
}

const Task = ({ task, onDelete, onToggle }: Props) => {
  return (
    <StyledTask>
      <div className={!task.isDone ? "pending-task" : "completed-task"}>
        <p>{task.text}</p>
        {
          !task.isDone ? (
            <IconButton
              onClick={() => onToggle(task)}
              icon={"tick"}
              height={18}
              width={18}
            />
          ) : (
            <IconButton
              onClick={() => onToggle(task)}
              icon={"doubleTick"}
              height={18}
              width={18}
            />
          )
        }
        <IconButton
          onClick={() => onDelete(task)}
          icon={"cross"}
          height={15}
          width={15}
        />
      </div>
    </StyledTask >
  );
};

export default Task;
