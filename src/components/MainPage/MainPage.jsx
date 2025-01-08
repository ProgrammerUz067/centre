import React from "react";
import style from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import img from "../../../public/main.png"

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div className={`${style.mainPage}`}>
      <div className="w-[50%] z-10">
        {" "}
          <p className={style.title}>{t("main.titleGreen")} <span>{t("main.titleWhite")}</span></p>
          <p className={style.subtitle}>{t("main.main-text")}</p>
        
      </div>
      <div className="w-[50%] z-10 mt-[100px] ml-[100px] img">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
