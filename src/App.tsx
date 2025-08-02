import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import SmoothScroll from "./layout/SmoothScroll";

// Lazy load all sections
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./sections/Hero"));
const Hero3D = lazy(() => import("./sections/Hero3D"));
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));
const CursorSpotlight = lazy(() => import("./ui/CursorSpotlight"));

export default function App() {
  return (
    <SmoothScroll>
      <CursorSpotlight />
      <Header />
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
          }}
          className="pointer-events-none"
        >
          <Preload all />
          <Hero3D />
        </Canvas>
      </Suspense>

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}