import classNames from "classnames";
import styles from "./Footer.module.scss";

import iconMail from "@assets/icons/icon_mail.svg";
import iconPhone from "@assets/icons/icon_phone.svg";
import iconTelegram from "@assets/icons/icon_telegram.svg";

const Footer = () => {
  return (
    <div
      id="foursSection"
      className={classNames(styles.foursBlock, styles.scrollSection)}
    >
      <div className={styles.foursBlock_up}>
        <div className={styles.foursBlock_up_title}>
          Пробное занятие - БЕСПЛАТНО
        </div>
        <div className={styles.foursBlock_up_button}>
          <a
            className={styles.foursBlock_up_button_link}
            href="https://t.me/silaeva_alina"
          >
            Записаться
          </a>
        </div>
      </div>
      <div className={styles.foursBlock_down}>
        <div className={styles.foursBlock_down_up}>
          <div>
            <a href="">Политика обработки персональных данных</a>
          </div>
          <div>
            <a href="">Оферта</a>
          </div>
        </div>
        <div className={styles.foursBlock_down_middle}>
          <div className={styles.foursBlock_down_middle_sp}>
            ИП Силаева Алина Олеговна
          </div>
          <div className={styles.foursBlock_down_middle_tin}>
            ИНН: 330801741311
          </div>
          <div className={styles.foursBlock_down_middle_psrn}>
            ОГРН: 325330000070002
          </div>
        </div>
        <div className={styles.foursBlock_down_bottom}>
          <div className={styles.foursBlock_down_bottom_phone}>
            <a href="tel:89040305883">
              <img src={iconPhone} alt="" />
            </a>
          </div>
          <div className={styles.foursBlock_down_bottom_mail}>
            <a href="mailto:silaeva_alina@mail.ru?subject=Занятия по математике/информатике&body=Здравствуйте!%0D%0AИнтересуют уроки по математике и/или информатике.%0D%0AМой уровень: %0D%0AКласс/возраст: %0D%0AЖелаемое время: %0D%0A%0D%0AСпасибо!">
              <img src={iconMail} alt="" />
            </a>
          </div>
          <div className={styles.foursBlock_down_bottom_telegram}>
            <a href="https://t.me/silaeva_alina">
              <img src={iconTelegram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
