import { useState } from "react";
import HomePage from "@/pages/HomePage";
import { Preloader } from "@/shared/ui/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./App.module.scss";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.mainContent}
      >
        <HomePage />
      </motion.main>
    </>
  );
}

export default App;
