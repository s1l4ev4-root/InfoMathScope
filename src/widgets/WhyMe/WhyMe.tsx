import classNames from "classnames";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./WhyMe.module.scss";

import photoIPad from "@assets/images/photo_ipad.jpeg";
import photoMath from "@assets/images/photo_math.jpeg";
import photoProbability from "@assets/images/photo_probability.jpg";

const WhyMe = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
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
      },
    ],
  );

  return (
    <div
      id="secondSection"
      className={classNames(styles.secondBlock, styles.scrollSection)}
    >
      <div className={styles.secondBlock_left}>
        <div className={styles.secondBlock_left_header}>
          Почему выбирают меня
        </div>
        <div>
          <ul className={styles.secondBlock_left_list}>
            <li>
              <span className={styles.secondBlock_left_list_bold}>
                Доступное объяснение:{" "}
              </span>
              Превращаю сложное в простое.{" "}
            </li>
            <li>
              <span className={styles.secondBlock_left_list_bold}>
                Индивидуальный подход:{" "}
              </span>
              Программа под каждого ученика.
            </li>
            <li>
              <span className={styles.secondBlock_left_list_bold}>
                Авторские материалы:{" "}
              </span>
              Собственные конспекты, схемы, методы запоминания.
            </li>
            <li>
              <span className={styles.secondBlock_left_list_bold}>
                Поддержка 24/7:{" "}
              </span>
              Отвечаю на вопросы в чате между занятиями.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.secondBlock_right}>
        <div
          ref={sliderRef}
          className={classNames(styles.keenSlider, "keen-slider")}
        >
          <div className="keen-slider__slide number-slide">
            <img src={photoIPad} alt="" />
          </div>
          <div className="keen-slider__slide number-slide">
            <img src={photoMath} alt="" />
          </div>
          <div className="keen-slider__slide number-slide">
            <img src={photoProbability} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.lineContainer_line}></div>
      </div>
    </div>
  );
};

export default WhyMe;
