import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/taskBoard/TaskBoard";
import { TaskContext } from "./context/TaskContext";

function App() {
  return (
    <div>
      <TaskContext.Provider value="tasks">
        <Navbar></Navbar>
        <Banner></Banner>
        <TaskBoard></TaskBoard>
        <Footer></Footer>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
