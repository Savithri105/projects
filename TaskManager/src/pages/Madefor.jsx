import { Link } from "react-router-dom";

const Madefor = () => {
  return (
    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
      <Link to="/TaskManagement" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
       Task Management
      </Link>
     <Link to="/HabitForming" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
       Habit Forming
      </Link>
    </div>
  );
};

export default Madefor;
