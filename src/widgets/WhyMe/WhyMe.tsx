import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./WhyMe.module.scss";

import photoIPad from "@assets/images/photo_ipad.jpeg";
import photoMath from "@assets/images/photo_math.jpeg";
import photoProbability from "@assets/images/photo_probability.jpg";

const sliderImages = [photoIPad, photoMath, photoProbability];

// Auto-play plugin for Keen Slider
const autoplayPlugin = (slider: any) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  const clearNextTimeout = () => clearTimeout(timeout);
  const nextTimeout = () => {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => slider.next(), 2500);
  };

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

const listVariants: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
  hidden: {},
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transition: Transition = { duration: 0.8, ease: "easeOut" };

const WhyMe = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true },
    [autoplayPlugin]
  );

  const benefits = [
    { title: "Доступное объяснение", text: "Превращаю сложное в простое." },
    { title: "Индивидуальный подход", text: "Программа под каждого ученика." },
    { title: "Авторские материалы", text: "Собственные конспекты, схемы, методы запоминания." },
    { title: "Поддержка 24/7", text: "Отвечаю на вопросы в чате между занятиями." },
  ];

  return (
    <motion.section 
      id="why-me" 
      className={styles.whyMeSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.textContainer}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={transition}
      >
        <h2>Почему выбирают меня</h2>
        <motion.ul 
          className={styles.benefitsList}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.li key={index} variants={itemVariants}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div 
        className={styles.sliderContainer}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={transition}
      >
        <div ref={sliderRef} className="keen-slider">
          {sliderImages.map((src, index) => (
            <div key={index} className={`keen-slider__slide ${styles.slide}`}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhyMe;
