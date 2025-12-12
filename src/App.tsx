import { useEffect, useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import SeasonalGreeting from "./components/SeasonalGreeting";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Analytics />
      <ToastContainer
        position="top-center"
        theme="dark"
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
      {showIntro ? (
        <Intro />
      ) : (
        <div className="w-full h-screen bg-(--background-color)">
          <SeasonalGreeting delayMs={0} showMs={5000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      )}
    </>
  );
}
