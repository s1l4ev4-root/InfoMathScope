import classNames from "classnames";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./App.module.scss";

import iconComputer from "@assets/icons/icon_computer.png";
import iconHatGraduate from "@assets/icons/icon_hat_graduate.svg";
import iconMail from "@assets/icons/icon_mail.svg";
import iconMath from "@assets/icons/icon_math.png";
import iconPhone from "@assets/icons/icon_phone.svg";
import iconTelegram from "@assets/icons/icon_telegram.svg";
import photoAlina from "@assets/images/photo_alina.jpg";
import photoIPad from "@assets/images/photo_ipad.jpeg";
import photoMath from "@assets/images/photo_math.jpeg";
import photoProbability from "@assets/images/photo_probability.jpg";

function App() {
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
    ]
  );
  return (
    <div className={styles.scrollContainer}>
      <div
        id="firstSection"
        className={classNames(styles.firstBlock, styles.scrollSection)}
      >
        <div className={styles.firstBlock_up}>
          <div className={styles.header}>
            <div className={styles.header_left}>
              {/* <div className={styles.header_why}>Почему я?</div> */}
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
              Разбор всех заданий экзамена, от простейших задач до самых
              сложных. Учимся правильно оформлять и аргументировать решение,
              чтобы получить максимальный балл. Формат и длительность занятий
              обсуждаются индивидуально.
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
              электронные таблицы и логику. Глубокий разбор задач №24-27,
              которые приносят основное количество баллов. Формат и длительность
              занятий обсуждаются индивидуально.
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
    </div>
  );
}

export default App;
