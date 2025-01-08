import React from "react";
import styles from "./Development.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import TextUp from "../Reveal/TextUp";
import Reveal from "../Reveal/Reveal";
import js from "../../../public/js.jpg";
import py from "../../../public/py.jpg";
import ru from "../../../public/ru.jpg";
import uzum from "../../../public/uzum.jpg";
import wb from "../../../public/wb.png";
import ozon from "../../../public/ozon.png";
import eng from "../../../public/eng.png";
import yandex from "../../../public/yandex.jpg";
import pc from "../../../public/pc.png";

export default function Development() {
  const { t } = useTranslation();

  return (
    <section className={styles.courses}>
      <h1 className={styles.tit}>{t("courses.title")}</h1>
      <div className={styles.wrapper}>
        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.pc.title")}</h1>
            <h3 className={styles.duration}>{t("courses.pc.duration")}</h3>
            <p className={styles.price}>{t("courses.pc.price")}</p>
            <p className={styles.des}>{t("courses.pc.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={pc} className={styles.imgx} alt="pc" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.front.title")}</h1>
            <h3 className={styles.duration}>{t("courses.front.duration")}</h3>
            <p className={styles.price}>{t("courses.front.price")}</p>
            <p className={styles.des}>{t("courses.front.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={js} alt="front" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.back.title")}</h1>
            <h3 className={styles.duration}>{t("courses.back.duration")}</h3>
            <p className={styles.price}>{t("courses.back.price")}</p>
            <p className={styles.des}>{t("courses.back.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={py} alt="back" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.eng.title")}</h1>
            <h3 className={styles.duration}>{t("courses.eng.duration")}</h3>
            <p className={styles.price}>{t("courses.eng.price")}</p>
            <p className={styles.des}>{t("courses.eng.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={eng} className={styles.imgx} alt="eng" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.rus.title")}</h1>
            <h3 className={styles.duration}>{t("courses.rus.duration")}</h3>
            <p className={styles.price}>{t("courses.rus.price")}</p>
            <p className={styles.des}>{t("courses.rus.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={ru} alt="rus" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>
              {t("courses.market.standart.title")}
            </h1>
            <h3 className={styles.duration}>
              {t("courses.market.standart.duration")}
            </h3>
            <p className={styles.price}>{t("courses.market.standart.price")}</p>
            <p className={styles.des}>{t("courses.market.standart.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={uzum} alt="standart" className={styles.img} />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>
              {t("courses.market.standart_plus.title")}
            </h1>
            <h3 className={styles.duration}>
              {t("courses.market.standart_plus.duration")}
            </h3>
            <p className={styles.price}>
              {t("courses.market.standart_plus.price")}
            </p>
            <p className={styles.des}>
              {t("courses.market.standart_plus.des")}
            </p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={wb} className={styles.img} alt="standart_plus" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.market.biznes.title")}</h1>
            <h3 className={styles.duration}>
              {t("courses.market.biznes.duration")}
            </h3>
            <p className={styles.price}>{t("courses.market.biznes.price")}</p>
            <p className={styles.des}>{t("courses.market.biznes.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={ozon} className={styles.img} alt="biznes" />
          </div>
        </div>

        <div className={styles.course}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{t("courses.market.vip.title")}</h1>
            <h3 className={styles.duration}>
              {t("courses.market.vip.duration")}
            </h3>
            <p className={styles.price}>{t("courses.market.vip.price")}</p>
            <p className={styles.des}>{t("courses.market.vip.des")}</p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={yandex} className={styles.imgy} alt="vip" />
          </div>
        </div>
      </div>
    </section>
  );
}
