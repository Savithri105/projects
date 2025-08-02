import React from 'react'
import { Link } from 'react-router-dom'

const HabitForming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Improved Responsive Spacing */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-20 gap-8 lg:gap-16 xl:gap-24 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
            alt="Habit formation illustration" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
            A Smarter Approach to Building Everyday Discipline
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
            From daily reminders to long-term progress, we simplify your habits so you can focus on growth, not remembering.
            Join thousands who've transformed their routines with our science-backed system.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              to="/signup"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Start for free
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section - Adjusted Grid for Mobile */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '📅',
                title: 'Daily Tracking',
                description: 'Log your habits effortlessly with our intuitive interface designed for consistency.'
              },
              {
                icon: '📊',
                title: 'Progress Analytics',
                description: 'Visualize your streaks and patterns with beautiful, insightful charts.'
              },
              {
                icon: '🔔',
                title: 'Smart Reminders',
                description: 'Personalized notifications that adapt to your schedule and progress.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-5 sm:p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials - Improved Card Sizing */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
            Loved by Productive People Worldwide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Yuji Channel",
                comment: "This is the best task management app I've used in years. Even the free version has everything I need!",
              },
              {
                name: "MyEducationDiscount.com",
                comment: "Perfect for staying organized. TickTick is feature-rich and affordable, especially with EDU discounts.",
              },
              {
                name: "Vitaly Salakhmir",
                comment: "I use this app across all my devices — phone, tablet, and laptop. It syncs perfectly and keeps me on track.",
              },
              {
                name: "Yuuk",
                comment: "Simple and intuitive UI. I start my day here, plan my tasks, and never miss deadlines anymore.",
              },
              {
                name: "Moe (Senior Engineer)",
                comment: "It offers only the features I need — nothing bloated. Very efficient and cleanly built.",
              },
              {
                name: "Dr. Yohanna Caraballo",
                comment: "Using this with the Eisenhower Matrix has changed my work style. I recommend it to my colleagues and students.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="border border-gray-200 bg-white p-4 sm:p-6 h-full flex flex-col justify-between hover:shadow transition-shadow duration-300"
              >
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <p className="text-gray-900 font-semibold text-xs sm:text-sm mt-auto">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Adjusted Padding */}
      <div className="py-12 sm:py-16 bg-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Your Habits?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join thousands of people building better lives one habit at a time.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-red-500 hover:bg-gray-100 px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start for free
          </Link>
        </div>
      </div>

      {/* Footer - Responsive Grid */}
      <footer className="bg-gray-300 text-gray-700 py-8 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-20 mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/pricing" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="/overview" className="hover:text-blue-600">Overview</a></li>
              <li><a href="/signup" className="hover:text-blue-600">Get Started</a></li>
            </ul>
          </div>
          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm sm:text-md font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-600">Careers</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
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
              <button className="bg-blue-600 text-white text-xs sm:text-sm py-2 rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8 sm:mt-10 border-t pt-4">
          &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default HabitForming