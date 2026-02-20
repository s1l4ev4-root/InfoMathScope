import classNames from "classnames";
import styles from "./Services.module.scss";

import iconComputer from "@assets/icons/icon_computer.png";
import iconHatGraduate from "@assets/icons/icon_hat_graduate.svg";
import iconMath from "@assets/icons/icon_math.png";

const Services = () => {
  return (
    <div
      id="thirdSection"
      className={classNames(styles.thirdBlock, styles.scrollSection)}
    >
      <div className={styles.thirdBlock_header}>Услуги</div>
      <div className={styles.thirdBlock_ul}>
        <div className={styles.thirdBlock_ul_li}>
          <div className={styles.thirdBlock_ul_li_icon}>
            <img src={iconHatGraduate} alt="" />
          </div>
          <div className={styles.thirdBlock_ul_li_title}>
            Помощь со школьной программой
          </div>
          <div className={styles.thirdBlock_ul_li_body}>
            Ликвидация пробелов в знаниях. Помощь с домашними заданиями.
            Углубленное изучение математики. Формат и длительность занятий
            обсуждаются индивидуально.
          </div>
          <div className={styles.thirdBlock_ul_li_price}>
            Стоимость: от 1000 р./60 минут
          </div>
        </div>
        <div className={styles.thirdBlock_ul_li}>
          <div className={styles.thirdBlock_ul_li_icon}>
            <img src={iconMath} alt="" />
          </div>
          <div className={styles.thirdBlock_ul_li_title}>
            Подготовка к ОГЭ/ЕГЭ по математике
          </div>
          <div className={styles.thirdBlock_ul_li_body}>
            Разбор всех заданий экзамена, от простейших задач до самых сложных.
            Учимся правильно оформлять и аргументировать решение, чтобы получить
            максимальный балл. Формат и длительность занятий обсуждаются
            индивидуально.
          </div>
          <div className={styles.thirdBlock_ul_li_price}>
            Стоимость: от 1500р/60 минут
          </div>
        </div>
        <div className={styles.thirdBlock_ul_li}>
          <div className={styles.thirdBlock_ul_li_icon}>
            <img src={iconComputer} alt="" />
          </div>
          <div className={styles.thirdBlock_ul_li_title}>
            Подготовка к ОГЭ/ЕГЭ по информатике
          </div>
          <div className={styles.thirdBlock_ul_li_body}>
            Разбор всех типов заданий, особенно задач на программирование,
            электронные таблицы и логику. Глубокий разбор задач №24-27, которые
            приносят основное количество баллов. Формат и длительность занятий
            обсуждаются индивидуально.
          </div>
          <div className={styles.thirdBlock_ul_li_price}>
            Стоимость: от 1500р/60 минут
          </div>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.lineContainer_line}></div>
      </div>
    </div>
  );
};

export default Services;
