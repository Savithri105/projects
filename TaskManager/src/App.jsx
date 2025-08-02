import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import TaskManagement from './pages/Taskmanagement'
import Overview from "./pages/Overview";
import HabitForming from "./pages/HabitForming";
import TaskPage from './pages/Taskpage';
import DailyRoutine from "./pages/DailyRoutine";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Overview />}/> 
    
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/TaskManagement" element={<TaskManagement />} />
        <Route path="/HabitForming" element={<HabitForming />}/>
        <Route path="/tasks" element={<TaskPage />} />
         <Route path="/daily-routine" element={<DailyRoutine />} />
      </Routes>
    </>
  );
}

export default App;
