import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.scss";
import photoAlina from "@assets/images/photo_alina.jpg";
import background from "@assets/images/image_background.png";

// New component for word-by-word animation
const AnimatedText = ({ text, el: Wrapper = "p", className, variants }: any) => {
  return (
    <Wrapper className={className}>
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
      >
        {text.split(" ").map((word:any, index:any) => (
          <motion.span key={index} style={{ display: 'inline-block', overflow: 'hidden' }}>
             <motion.span
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { y: "100%" },
                visible: { y: 0, transition: { ease: [0.22, 1, 0.36, 1], delay: index * 0.1 } }
              }}
            >
              {word}
            </motion.span>
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const photoVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: "easeOut" } },
};

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={targetRef} id="home" className={styles.hero}>
      <motion.div
        className={styles.background}
        style={{
          backgroundImage: `url(${background})`,
          y: backgroundY,
        }}
      />
      <div className={styles.overlay} />

      <motion.nav
        className={styles.headerNav}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a href="#why-me" variants={navItemVariants}>
          Почему я?
        </motion.a>
        <motion.a href="#services" variants={navItemVariants}>
          Услуги
        </motion.a>
        <motion.div className={styles.brand} variants={navItemVariants}>
          <a href="https://t.me/silaeva_alina">Математика</a>
        </motion.div>
        <motion.a href="#contact" variants={navItemVariants}>
          Контакты
        </motion.a>
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
        
        <AnimatedText 
          el="h1" 
          text="Силаева Алина Олеговна" 
          variants={containerVariants}
        />
        <AnimatedText
          className={styles.subtitle}
          text="Твой репетитор по математике и информатике"
          variants={containerVariants}
        />
        <AnimatedText
          className={styles.tagline}
          text="Помогу не просто решать, а понимать"
          variants={containerVariants}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
