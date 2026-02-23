import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import styles from "./Hero.module.scss";
import photoAlina from "@assets/images/photo_alina.jpg";
import background from "@assets/images/image_background.png";

// Animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const photoVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const navVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
}

const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut" } }
}

const Hero = () => {
  return (
    <div id="home" className={styles.hero} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.overlay} />
      
      <motion.nav 
        className={styles.headerNav}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a href="#why-me" variants={navItemVariants}>Почему я?</motion.a>
        <motion.a href="#services" variants={navItemVariants}>Услуги</motion.a>
        <motion.div className={styles.brand} variants={navItemVariants}>
            <a href="https://t.me/silaeva_alina">Математика</a>
        </motion.div>
        <motion.a href="#contact" variants={navItemVariants}>Контакты</motion.a>
      </motion.nav>

      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.photoContainer} variants={photoVariants}>
          <img src={photoAlina} alt="Алина Силаева" />
        </motion.div>
        <motion.h1 variants={itemVariants}>
          Силаева Алина Олеговна
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Твой репетитор по математике и информатике
        </motion.p>
        <motion.p variants={itemVariants} className={styles.tagline}>
          Помогу не просто решать, а понимать
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
