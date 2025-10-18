import React from "react";
import Button from "./components/button";
import { useNavigate } from "react-router-dom";
import "./App.css";
const LandingPage = () => {
  const navigate = useNavigate();
  const [contact, setContact] = React.useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = React.useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen w-full relative">
      <main className="px-6 md:px-12 lg:px-20 xl:px-32 py-16 space-y-32">
        {/* Hero */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Find Your Dream{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Car
              </span>{" "}
              Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Discover a wide selection of premium cars — from electric innovations to timeless classics.
            </p>
            <Button
              label="Browse Cars →"
              onClick={() => navigate("/car-listing")}
              className="text-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Luxury sports car"
              className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="text-center">
          <h3 className="text-4xl font-bold mb-6 text-gray-900">
            Why Choose <span className="text-indigo-600">AutoDrive</span>?
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Wide Selection", desc: "From sports cars to family SUVs — explore hundreds of options.", icon: "🚗" },
              { title: "Trusted Dealers", desc: "We partner only with verified sellers and dealerships.", icon: "🤝" },
              { title: "Easy Financing", desc: "Flexible payment options to make your dream car more affordable.", icon: "💳" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-5xl mx-auto py-20">
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">About AutoDrive</h3>
            <p className="text-gray-600 mb-6">
              AutoDrive is dedicated to connecting drivers with high-quality vehicles across a wide range of styles and budgets. Our platform partners with verified sellers and offers transparent listings, expert support, and flexible financing options to help you find the perfect car.
            </p>
            <div className="flex items-center justify-center">
              <Button label="Learn more" onClick={() => navigate('/about')} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-3xl mx-auto py-12">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h3>
            <p className="text-gray-600 mb-6">Have questions? Send us a message and we'll get back to you shortly.</p>

            {contactSent ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">Thanks — your message has been sent.</div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // simulate send
                  setContactSent(true);
                  setTimeout(() => setContactSent(false), 5000);
                  setContact({ name: "", email: "", message: "" });
                }}
                className="space-y-4"
              >
                <input
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <input
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="Email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <textarea
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <div className="flex justify-end">
                  <Button label="Send message" type="submit" />
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
