import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import HomePage from "../pages/HomePage";
import { Preloader } from "../shared/ui/Preloader";
import classNames from "classnames";

function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHiding(true), 300);
          setTimeout(() => setLoading(false), 1100);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!loading) {
    return (
      <div className={styles.scrollContainer}>
        <HomePage />
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.preloaderContainer, {
        [styles.hiding]: hiding,
      })}
    >
      <Preloader progress={progress} />
    </div>
  );
}

export default App;
