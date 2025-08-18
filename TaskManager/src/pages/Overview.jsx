import React from 'react'
import taskbanner from '../assets/tasks-banner.png'
import {Link} from 'react-router-dom'
import { useState } from "react";
import smartPlanner from "../assets/first.avif";
import manageAnywhere from "../assets/second.avif";
import simplifiedSharing from "../assets/third.avif"; 
import taskManagement from "../assets/fourth.avif"; 
import boss from '../assets/ceo.jpeg'

const Overview = () => {
  const [activeTab, setActiveTab] = useState("default");

  const imageMap = {
    smart: smartPlanner,
    anywhere: manageAnywhere,
    sharing: simplifiedSharing,
    default: taskManagement,
  };

  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 sm:p-10 lg:p-16 xl:p-20 bg-purple-100'>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6'>Plan, track, and manage your tasks effortlessly.</h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-700'>
            “Task Manager is designed to streamline your workflow and enhance productivity. With intuitive features and a clean interface, it allows individuals and teams to organize tasks efficiently, prioritize with clarity, and execute with precision all in one centralized platform.”
          </p>
          <Link
            to="/signup"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl mt-6 sm:mt-8 transition-all duration-300"
          >
            Start for free
          </Link>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img src={taskbanner} alt="Task management illustration" className='w-full max-w-lg'/>
        </div>
      </div>

      {/* Features*/}
      <div className="flex items-center justify-center bg-white px-4 sm:px-6 py-10 sm:py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center max-w-6xl w-full">
          {/* Column 1 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-500">Simple</h3>
            <p className="text-gray-600 font-medium text-lg sm:text-xl">Easy to use, no clutter—just focus on your tasks.</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-500">Straightforward</h3>
            <p className="text-gray-600 text-lg sm:text-xl">Clear layout and intuitive controls make it seamless.</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-500">Super Powerful</h3>
            <p className="text-gray-600 text-lg sm:text-xl">Packed with features to organize, plan, and execute.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 bg-white">
        {/* Left Q&A section */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Stay on task all day long</h1>

          <div>
            <button
              onClick={() => setActiveTab("smart")}
              className={`text-left w-full text-base sm:text-lg font-semibold border-b pb-2 ${activeTab === "smart" ? "text-teal-500" : "text-gray-700"}`}
            >
              A smart daily planner
            </button>
            {activeTab === "smart" && (
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Set yourself up for success with My Day—intelligent and personalized suggestions to update your daily or weekly to-do list.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => setActiveTab("anywhere")}
              className={`text-left w-full text-base sm:text-lg font-semibold border-b pb-2 ${activeTab === "anywhere" ? "text-teal-500" : "text-gray-700"}`}
            >
              Manage your to-do list from anywhere
            </button>
            {activeTab === "anywhere" && (
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Access your tasks seamlessly across all your devices—be it desktop, mobile, or web.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => setActiveTab("sharing")}
              className={`text-left w-full text-base sm:text-lg font-semibold border-b pb-2 ${activeTab === "sharing" ? "text-teal-500" : "text-gray-700"}`}
            >
              Simplified sharing
            </button>
            {activeTab === "sharing" && (
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Share your lists with friends, family, or teammates and collaborate in real time.
              </p>
            )}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={imageMap[activeTab]}
            alt="Feature preview"
            className="rounded-lg shadow-lg w-full max-w-md transition-all duration-300"
          />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className='bg-teal-900 w-full p-6 sm:p-8 md:p-10'>
        <div className='rounded-2xl flex flex-col md:flex-row justify-center gap-4 sm:gap-6 py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 items-center'> 
          <img src={boss} alt="CEO" className='h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover'/>
          <p className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left'>
            “This task manager has significantly improved my team's organization and workflow. 
            Its clean design, smart features, and user-friendly interface make it an essential tool in our daily operations.”
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mt-4 sm:mt-6'>
          <p className='text-white font-medium'>- Charlotte Bennett</p>
          <p className='text-white text-sm sm:text-base'>CEO</p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className='flex flex-col justify-center items-center p-10 sm:p-12 md:p-16 lg:p-20'>
        <div className='text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6'>Manage all your tasks with TaskManager</h1>
        </div>
        <Link
          to="/signup"
          className="inline-block bg-teal-400 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl mt-6 transition-all duration-300"
        >
          Start for free
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Column 1*/}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-teal-500">TaskManager</h2>
            <p className="text-xs sm:text-sm mt-2">
              Simple, streamlined, and powerful—TaskManager helps individuals and teams stay on top of their work with clarity and confidence.
            </p>
          </div>
          {/* Column 2*/}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-teal-500">Pricing</Link></li>
              <li><Link to="/overview" className="hover:text-teal-500">Overview</Link></li>
              <li><Link to="/signup" className="hover:text-teal-500">Get Started</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-teal-500">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-teal-500">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-teal-500">Privacy Policy</Link></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Stay Updated</h3>
            <p className="text-xs sm:text-sm mb-2">Subscribe to receive product updates, tips, and productivity hacks.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm py-2 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8 sm:mt-10 border-t border-gray-200 pt-4 sm:pt-6">
          &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Overview
