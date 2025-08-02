import React from 'react';
import { Link } from 'react-router-dom';

const TaskManagement = () => {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2838/2838694.png", 
      title: "Task Organization",
      description: "Categorize tasks with tags, priorities, and due dates for effortless management"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png", 
      title: "Smart Scheduling",
      description: "Auto-schedule tasks based on your availability and energy levels"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png", 
      title: "Team Collaboration",
      description: "Delegate tasks and track progress with your team in real-time"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8 px-4 lg:px-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Your brain's for ideas, not remembering 2,974 to-dos
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Capture all those tasks in our Task Manager and feel an instant sense of clarity and control.
            Our AI-powered system helps you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              to="/signup"
              className="inline-block bg-teal-400 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start for free
            </Link>
            <Link
              to="/demo"
              className="inline-block border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300"
            >
              Watch demo
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="https://img.freepik.com/free-vector/organized-concept-illustration_114360-1023.jpg"
            alt="Modern task management dashboard"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Value Props Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
            {[
              {
                title: "Simple",
                description: "Easy to use, no clutter—just focus on your tasks.",
                color: "text-blue-600"
              },
              {
                title: "Straightforward",
                description: "Clear layout and intuitive controls make it seamless.",
                color: "text-blue-600"
              },
              {
                title: "Super Powerful",
                description: "Packed with features to organize, plan, and execute.",
                color: "text-blue-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className={`text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-600 text-lg sm:text-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
            Everything You Need to Master Your Tasks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center px-4">
                <div className="bg-blue-50 w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-8 h-8 sm:w-10 sm:h-10" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/2838/2838735.png";
                    }}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Productivity Stats Section */}
      <div className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              {
                value: "87%",
                label: "Increase in productivity"
              },
              {
                value: "3.5x",
                label: "More tasks completed"
              },
              {
                value: "2.1h",
                label: "Daily time saved"
              },
              {
                value: "94%",
                label: "User satisfaction"
              }
            ].map((stat, index) => (
              <div key={index} className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-2 sm:mb-3">{stat.value}</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to take control of your tasks?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Join thousands of professionals who've transformed their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-blue-600">TaskManager</h2>
            <p className="text-xs sm:text-sm mt-2">
              Simple, streamlined, and powerful—TaskManager helps individuals and teams stay on top of their work with clarity and confidence.
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/overview" className="hover:text-blue-600">Overview</Link></li>
              <li><Link to="/signup" className="hover:text-blue-600">Get Started</Link></li>
            </ul>
          </div>
          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Stay Updated</h3>
            <p className="text-xs sm:text-sm mb-2">Subscribe to receive product updates, tips, and productivity hacks.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-2 rounded-md transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8 sm:mt-10 border-t border-gray-200 pt-4">
          &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TaskManagement;