import Footer from "@/widgets/Footer";
import Hero from "@/widgets/Hero";
import Services from "@/widgets/Services";
import WhyMe from "@/widgets/WhyMe";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.heroSection}>
        <Hero />
      </header>
      <main className={styles.contentWrapper}>
        <WhyMe />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
