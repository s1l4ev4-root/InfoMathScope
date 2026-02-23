import { motion } from "framer-motion";
import styles from "./Services.module.scss";



const HatGraduateIcon = () => (
    <svg width="24" height="24" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.33,18.94,20,26.6,4.67,18.94,20,11.28ZM20,28.69,2.5,19.94v6.22c0,.52,.2,1,.56,1.41L18.89,37.4a2.5,2.5,0,0,0,2.22,0L36.93,27.57c.36-.41,.56-.89,.56-1.41V19.94Z"/>
    </svg>
);

const MathIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19l4-4 4 4 4-4 4 4"/>
        <path d="M4 12l4-4 4 4 4-4 4 4"/>
    </svg>
);

const ComputerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9"/>
        <path d="M12 16h10a2 2 0 0 1 2 2v1H2v-1a2 2 0 0 1 2-2h10z"/>
    </svg>
);


const servicesData = [
  {
    icon: <HatGraduateIcon />,
    title: "Помощь со школьной программой",
    description: "Ликвидация пробелов в знаниях, помощь с домашними заданиями, углубленное изучение. Формат и длительность обсуждаются индивидуально.",
    price: "от 1000 р./60 минут",
  },
  {
    icon: <MathIcon />,
    title: "Подготовка к ОГЭ/ЕГЭ по математике",
    description: "Разбор всех заданий экзамена, от простейших до самых сложных. Учимся правильно оформлять и получать максимальный балл.",
    price: "от 1500 р./60 минут",
  },
  {
    icon: <ComputerIcon />,
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
              {service.icon}
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
