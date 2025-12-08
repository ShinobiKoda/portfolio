import ParticlesAnimation from "./components/animations/Particles/Particles";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
      <ParticlesAnimation />
      <div className="w-full h-screen dark:bg-black bg-[#222831]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
