import { useState } from "react";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleBilling = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const plans = [
    {
      title: "FREE",
      price: 0,
      users: "Up to 5 users",
      features: ["3 Projects", "5GB Storage", "Basic Support"],
      cta: "Get Started"
    },
    {
      title: "PREMIUM",
      price: billing === "monthly" ? 350 : 300,
      users: "All features",
      features: [
        "Unlimited projects",
        "Task Management",
        "Time Tracking",
        "Blueprints",
        "Zia Insights",
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      title: "ENTERPRISE",
      price: billing === "monthly" ? 700 : 600,
      users: "Advanced features",
      features: [
        "AI Search",
        "Custom Roles",
        "Status Dashboard",
        "2FA",
        "Single Sign-On",
      ],
      cta: "Contact Sales"
    },
  ];

  const featureComparison = [
    { feature: "Projects", free: "3", premium: "Unlimited", enterprise: "Unlimited" },
    { feature: "Storage", free: "5GB", premium: "10GB", enterprise: "50GB" },
    { feature: "Users", free: "Up to 5", premium: "Unlimited", enterprise: "Unlimited" },
    { feature: "Priority Support", free: "✖", premium: "✔", enterprise: "✔" },
    { feature: "API Access", free: "✖", premium: "✔", enterprise: "✔" },
    { feature: "Mobile App", free: "✔", premium: "✔", enterprise: "✔" },
    { feature: "Time Tracking", free: "✖", premium: "✔", enterprise: "✔" },
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, all paid plans come with a 10-day free trial with no credit card required."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
            10-day free trial. No credit card required.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Choose the perfect plan for your team's needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-3 mb-8 sm:mb-12">
          <span className={`text-lg sm:text-xl ${billing === "monthly" ? "font-semibold" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={toggleBilling}
            className="relative inline-flex items-center h-6 w-11 rounded-full bg-gray-300 transition-colors duration-200"
            aria-label="Toggle billing period"
          >
            <span
              className={`inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 shadow-md ${
                billing === "monthly" ? "translate-x-1" : "translate-x-5"
              }`}
            />
          </button>
          <span className={`text-lg sm:text-xl ${billing === "yearly" ? "font-semibold" : "text-gray-500"}`}>
            Yearly <span className="text-xs sm:text-sm text-green-600">(Save 15%)</span>
          </span>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 sm:p-6 shadow-sm border-2 ${
                plan.popular ? "border-red-500" : "border-transparent"
              } transition-all hover:shadow-md relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-center text-lg sm:text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-center text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">{plan.users}</p>
              
              <p className="text-center text-2xl sm:text-3xl font-bold text-red-500 mb-2">
                ₹{plan.price}
                <span className="text-sm sm:text-base font-normal text-gray-600 ml-1">
                  /user/{billing === "monthly" ? "month" : "year"}
                </span>
              </p>
              
              {billing === "yearly" && plan.price !== 0 && (
                <p className="text-center text-xs sm:text-sm text-green-600 mb-4">
                  Save ₹{plan.title === "PREMIUM" ? "600" : "1,200"} annually
                </p>
              )}

              <button className={`w-full py-2 sm:py-3 px-4 rounded-lg font-medium mb-4 sm:mb-6 text-sm sm:text-base ${
                plan.popular 
                  ? "bg-red-500 hover:bg-red-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              } transition-colors duration-200`}>
                {plan.cta}
              </button>

              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-12 sm:mb-16 overflow-hidden">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Compare plans and features</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-max">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 sm:p-3 font-medium text-gray-700 text-sm sm:text-base">Features</th>
                  <th className="p-2 sm:p-3 font-medium text-gray-700 text-center text-sm sm:text-base">FREE</th>
                  <th className="p-2 sm:p-3 font-medium text-gray-700 text-center text-sm sm:text-base">PREMIUM</th>
                  <th className="p-2 sm:p-3 font-medium text-gray-700 text-center text-sm sm:text-base">ENTERPRISE</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2 sm:p-3 text-gray-700 text-sm sm:text-base">{row.feature}</td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{row.free}</td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{row.premium}</td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section with Collapsible Answers */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Frequently asked questions</h3>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center focus:outline-none"
                  aria-expanded={activeFaq === i}
                  aria-controls={`faq-${i}`}
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-${i}`}
                  className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-0 transition-all duration-300 ease-in-out ${
                    activeFaq === i ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-red-500 rounded-xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need help deciding?</h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Our team is happy to help you choose the right plan for your business.
          </p>
          <button className="bg-white text-red-500 font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-gray-50 text-sm sm:text-base transition-colors duration-200">
            Contact Sales
          </button>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 text-gray-700 py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20 mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
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
                  className="px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-sm"
                />
                <button className="bg-blue-600 text-white text-xs sm:text-sm py-1 sm:py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8 sm:mt-10 border-t border-gray-300 pt-4">
            &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Pricing;