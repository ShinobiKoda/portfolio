import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SocialBar from "./components/Layout/SocialBar";
import { Analytics } from "@vercel/analytics/react";
import Toast from "./components/Toast";
import Navbar from "./components/Layout/Navbar";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Intro from "./components/Intro";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load heavy components
const ParticlesAnimation = lazy(
  () => import("./components/animations/Particles/Particles"),
);

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
            <Suspense fallback={null}>
              <ParticlesAnimation className="absolute inset-0 w-full h-full z-20" />
            </Suspense>
          )}
          <div className="relative z-30">
            <Toast />
            <Navbar />
            <SocialBar />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
