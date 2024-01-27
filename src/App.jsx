import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/taskBoard/TaskBoard";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TaskBoard></TaskBoard>
      <Footer></Footer>
    </div>
  );
}

export default App;
