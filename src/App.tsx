import { useEffect, useState, lazy, Suspense } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
const ProjectsPage = lazy(() => import("./components/Projects"));
import Intro from "./components/Intro";
import { Routes, Route } from "react-router-dom";
import SocialBar from "./components/Layout/SocialBar";
import { Analytics } from "@vercel/analytics/react";
import ParticlesAnimation from "./components/animations/Particles/Particles";
import Toast from "./components/Toast";
import NotFound from "./components/NotFound";

export default function App() {
  const isHolidaySeason = () => {
    // Match particleConfig logic: show particles in December only
    return new Date().getMonth() === 11;
  };

  const [showIntro, setShowIntro] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem("introShown") !== "true";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      setShowIntro(false);
      try {
        sessionStorage.setItem("introShown", "true");
      } catch {}
    }, 2200);
    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <>
      <Analytics />

      {showIntro ? (
        <Intro />
      ) : (
        <div className="w-full min-h-screen bg-(--background-color) relative">
          {isHolidaySeason() && (
            <ParticlesAnimation className="absolute inset-0 w-full h-full z-20" />
          )}
          <div className="relative z-30">
            <Toast />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}
