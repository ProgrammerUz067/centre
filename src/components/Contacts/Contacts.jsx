import React from "react";
import styles from "./Contacts.module.scss";
import Button from "../Button/Button.jsx";

import { useTranslation } from "react-i18next";
import TextUp from "../Reveal/TextUp.jsx";
import Reveal from "../Reveal/Reveal.jsx";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <section id="contacts" className={styles.contacts}>
      <h1 className={styles.title}>{t("map.title")}</h1>

      <div style="position:relative;overflow:hidden;">
        <a
          href="https://yandex.uz/maps/org/uzit_group/41170032874/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;"
        >
          Uzit Group
        </a>
        <a
          href="https://yandex.uz/maps/10334/samarkand/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:14px;"
        >
          IT-компания в Самарканде
        </a>
        <a
          href="https://yandex.uz/maps/10334/samarkand/category/marketing_services/184105524/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:28px;"
        >
          Маркетинговые услуги в Самарканде
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=66.989284%2C39.688934&mode=search&oid=41170032874&ol=biz&z=16.73"
          width="1500"
          height="250"
          frameborder="1"
          allowfullscreen="true"
          style="position:relative;"
        ></iframe>
      </div>
    </section>
  );
}
