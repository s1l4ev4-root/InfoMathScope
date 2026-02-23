import { motion } from "framer-motion";
import styles from "./Footer.module.scss";

import iconMail from "@assets/icons/icon_mail.svg";
import iconPhone from "@assets/icons/icon_phone.svg";
import iconTelegram from "@assets/icons/icon_telegram.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      id="contact" 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0 }}
    >
      <div className={styles.ctaSection}>
        <h2>Пробное занятие - БЕСПЛАТНО</h2>
        <motion.a 
          href="https://t.me/silaeva_alina"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Записаться
        </motion.a>
      </div>

      <div className={styles.mainFooter}>
        <div className={styles.footerColumn}>
          <h4>ИП Силаева Алина Олеговна</h4>
          <p>ИНН: 330801741311</p>
          <p>ОГРН: 325330000070002</p>
        </div>
        <div className={styles.footerColumn}>
          <h4>Навигация</h4>
          <a href="#home">Главная</a>
          <a href="#why-me">Почему я?</a>
          <a href="#services">Услуги</a>
        </div>
        <div className={styles.footerColumn}>
          <h4>Контакты</h4>
          <div className={styles.socialIcons}>
            <a href="tel:89040305883" aria-label="Phone">
              <img src={iconPhone} alt="Phone" />
            </a>
            <a href="mailto:silaeva_alina@mail.ru?subject=Занятия" aria-label="Email">
              <img src={iconMail} alt="Email" />
            </a>
            <a href="https://t.me/silaeva_alina" aria-label="Telegram">
              <img src={iconTelegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {currentYear} Силаева Алина. Все права защищены.</p>
        <div className={styles.legalLinks}>
          {/* The original links were empty, so I'll keep them pointing to '#' */}
          <a href="#">Политика обработки персональных данных</a>
          <a href="#">Оферта</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
