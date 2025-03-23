import { useState, useEffect } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const difference = new Date("2025-05-01") - new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-800 text-white font-roboto">
      <div className="max-w-3xl p-8 rounded-lg shadow-2xl text-center">
        <img
          src="/PiyushProfile.jpg"
          alt="Piyush Gupta"
          className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2">Piyush Gupta's Portfolio - Coming Soon</h1>
        <p className="text-lg mb-6">
          Crafting a space to showcase AI-driven solutions for business. Expect insights into recommendation systems, predictive analytics, and more. Stay tuned!
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="p-4 bg-gray-800 rounded-lg transition-transform duration-300 transform hover:scale-105"
            >
              <div className="text-2xl font-semibold">{value}</div>
              <div className="text-sm capitalize">{unit}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-300">Launching on May 1, 2025</p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/piyush-gupta-09/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/Piyush-Guptaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
      <p className="mt-8 text-gray-400">Made with ❤️ by Piyush</p>
    </div>
  );
}