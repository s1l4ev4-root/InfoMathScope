import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./WhyMe.module.scss";

import photoIPad from "@assets/images/photo_ipad.jpeg";
import photoMath from "@assets/images/photo_math.jpeg";
import photoProbability from "@assets/images/photo_probability.jpg";

const sliderImages = [photoIPad, photoMath, photoProbability];

const BulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.09 16.05a4.3 4.3 0 0 1-6.18 0"/><path d="M9 12a5 5 0 0 1 5-5h.01a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5h-.01a5 5 0 0 1-5-5Z"/><path d="M4.69 16.05a4.3 4.3 0 0 0 6.18 0"/><path d="M12 2v2"/><path d="M12 18v4"/></svg>
);
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);


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
    { icon: <BulbIcon />, title: "Доступное объяснение", text: "Превращаю сложное в простое." },
    { icon: <TargetIcon />, title: "Индивидуальный подход", text: "Программа под каждого ученика." },
    { icon: <BookIcon />, title: "Авторские материалы", text: "Собственные конспекты, схемы, методы запоминания." },
    { icon: <ClockIcon />, title: "Поддержка 24/7", text: "Отвечаю на вопросы в чате между занятиями." },
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
            <motion.li key={index} className={styles.benefitItem} variants={itemVariants}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.benefitText}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
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
