import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Preloader.scss";

interface Props {
  onComplete: () => void;
}

export function Preloader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); 
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        className="preloader__title"
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      >
        <h1 className="preloader__title-outline">математика</h1>
        <h1 className="preloader__title-fill">математика</h1>

        <span className="preloader__dot preloader__dot--1" />
        <span className="preloader__dot preloader__dot--2" />
        <span className="preloader__dot preloader__dot--3" />
      </div>

      <div className="preloader__progress">{progress}%</div>
    </motion.div>
  );
}
