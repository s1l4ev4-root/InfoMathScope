import classNames from "classnames";
import styles from "./Hero.module.scss";

import photoAlina from "@assets/images/photo_alina.jpg";

const Hero = () => {
  return (
    <div
      id="firstSection"
      className={classNames(styles.firstBlock, styles.scrollSection)}
    >
      <div className={styles.firstBlock_up}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <div className={styles.header_why}>
              <a href="#secondSection">Почему я?</a>
            </div>
            <div className={styles.header_services}>
              <a href="#thirdSection">Услуги</a>
            </div>
          </div>
          <div className={styles.header_center}>
            <a href="https://t.me/silaeva_alina">Математика</a>
          </div>
          <div className={styles.header_right}>
            <a href="#foursSection">Контакты</a>
          </div>
        </div>
      </div>
      <div className={styles.firstBlock_down}>
        <div className={styles.firstBlock_down_picture}>
          <img src={photoAlina} alt="" />
        </div>
        <div className={styles.firstBlock_down_text}>
          <div className={styles.firstBlock_down_text_first}>
            Твой репетитор по математике и информатике <br />
            Силаева Алина Олеговна
          </div>
          <div className={styles.firstBlock_down_text_second}>
            Помогу не просто решать, а понимать
          </div>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.lineContainer_line}></div>
      </div>
    </div>
  );
};

export default Hero;
