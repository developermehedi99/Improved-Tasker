import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskNotFaund from "./TaskNotFaund";

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
  const [taskUpdate, setTaskUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    event.preventDefault();
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setTaskUpdate(task);
    setShowModal(true);
  };
  const handleClosed = () => {
    setShowModal(false);
    setTaskUpdate(null);
  };
  const handleTaskDeleted = (taskId) => {
    const tasksDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksDelete);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];

    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearchAction = (searchAction) => {
    console.log(searchAction);

    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchAction.toLowerCase())
    );
    setTasks([...filtered]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          taskUpdate={taskUpdate}
          onSave={handleAddTask}
          onClosed={handleClosed}
        ></AddTaskModal>
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onDeleteAllTasks={handleDeleteAll}
            onAddTask={() => setShowModal(true)}
            onSearch={handleSearchAction}
          ></TaskAction>
          <div className="overflow-auto">
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onDelete={handleTaskDeleted}
                onEdit={handleEditTask}
                onFavorite={handleFavorite}
              ></TaskList>
            ) : (
              <TaskNotFaund></TaskNotFaund>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
