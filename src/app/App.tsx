import styles from "./App.module.scss";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <div className={styles.scrollContainer}>
      <HomePage />
    </div>
  );
}

export default App;
