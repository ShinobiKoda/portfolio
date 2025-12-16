import { useEffect, useState, lazy, Suspense } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
const ProjectsPage = lazy(() => import("./components/Projects"));
import Intro from "./components/Intro";
import { Routes, Route } from "react-router-dom";
import SocialBar from "./components/Layout/SocialBar";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Analytics />

      {showIntro ? (
        <Intro />
      ) : (
        <div className="w-full h-full bg-(--background-color) relative">
          <SocialBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/projects"
              element={
                <Suspense fallback={null}>
                  <ProjectsPage />
                </Suspense>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}
