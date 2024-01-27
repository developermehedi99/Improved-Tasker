import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "doing assignment",
    description: "I am a learner in react and next js fornt end development",
    tags: ["web", "android", "apple"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = ({ task }) => {
    event.preventDefault();
    console.log("add task is clicking", task);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal onSave={handleAddTask}></AddTaskModal>}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowModal(true)}></TaskAction>
          <div className="overflow-auto">
            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
