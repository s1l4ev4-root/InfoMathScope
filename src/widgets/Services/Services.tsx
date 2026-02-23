import { motion } from "framer-motion";
import styles from "./Services.module.scss";

import iconComputer from "@assets/icons/icon_computer.png";
import iconHatGraduate from "@assets/icons/icon_hat_graduate.svg";
import iconMath from "@assets/icons/icon_math.png";

const servicesData = [
  {
    icon: iconHatGraduate,
    title: "Помощь со школьной программой",
    description: "Ликвидация пробелов в знаниях, помощь с домашними заданиями, углубленное изучение. Формат и длительность обсуждаются индивидуально.",
    price: "от 1000 р./60 минут",
  },
  {
    icon: iconMath,
    title: "Подготовка к ОГЭ/ЕГЭ по математике",
    description: "Разбор всех заданий экзамена, от простейших до самых сложных. Учимся правильно оформлять и получать максимальный балл.",
    price: "от 1500 р./60 минут",
  },
  {
    icon: iconComputer,
    title: "Подготовка к ОГЭ/ЕГЭ по информатике",
    description: "Разбор всех типов заданий, особенно задач на программирование. Глубокий разбор задач №24-27 для максимальных баллов.",
    price: "от 1500 р./60 минут",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Services = () => {
  return (
    <motion.section 
      id="services" 
      className={styles.servicesSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 className={styles.mainTitle} variants={itemVariants}>
        Услуги
      </motion.h2>

      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <motion.div 
            key={index} 
            className={styles.serviceCard}
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.iconWrapper}>
              <img src={service.icon} alt={`${service.title} icon`} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.price}>{service.price}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
