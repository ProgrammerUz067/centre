import React from "react";
import style from "./Team.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import TextUp from "../Reveal/TextUp";
// import images
import roma from "../../../public/roma.jpg";
import diyor from "../../../public/diyor.jpg";
import ramiz from "../../../public/ramiz.jpg";
import shakhnoza from "../../../public/shakhnoza.jpg";

export default function Team() {
  const [activeBackground, setActiveBackground] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 2345) {
        setActiveBackground(true);
      }
    });
  }, []);

  const { t } = useTranslation();
  return (
    <section id="team" className={style.team}>
      <h1 className={style.title}>{t("teachers.title")}</h1>

      <div class={style.container}>
        <div class={style.card}>
          <div class={style.Box}>
            <img src={roma} />
          </div>
          <div class={style.details}>
            <h2>
              {t("teachers.teacher1.name")} {t("teachers.teacher1.lastName")}
            </h2>
            <p>{t("teachers.teacher1.skill")}</p>
          </div>
        </div>
        <div class={style.card}>
          <div class={style.Box}>
            <img src={diyor} />
          </div>
          <div class={style.details}>
            <h2>
              {t("teachers.teacher2.name")} {t("teachers.teacher2.lastName")}
            </h2>
            <p>{t("teachers.teacher2.skill")}</p>
          </div>
        </div>
        <div class={style.card}>
          <div class={style.Box}>
            <img src={ramiz} />
          </div>
          <div class={style.details}>
            <h2>
              {t("teachers.teacher3.name")} {t("teachers.teacher3.lastName")}
            </h2>
            <p>{t("teachers.teacher3.skill")}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
