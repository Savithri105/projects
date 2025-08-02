import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (user && email && password) {
      try {
        
        await axios.post("http://localhost:3001/users", {
          username: user,
          email,
          password
        });

    
        navigate("/tasks");
      } catch (error) {
        console.error("Error signing up:", error);
        alert("Signup failed. Try again.");
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Sign up</h2>

        <form className="space-y-3 sm:space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter Username..."
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter a strong password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Sign up
          </button>
        </form>

        <div className="text-sm text-gray-600 mt-3 sm:mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline font-medium">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;