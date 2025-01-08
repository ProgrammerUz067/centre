import React from 'react';
import styles from './Questions.module.scss';
import { useTranslation } from 'react-i18next';
import TextUp from '../Reveal/TextUp';
import Reveal from '../Reveal/Reveal';

export default function Questions() {
  const { t } = useTranslation();
  
  return (
    <section id='questions' className={styles.questions}>
      <div className={styles.modul}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{t('contact.title')}</h1>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
        </div>

        <div className={styles.form}>
          <input type="text" placeholder={t('contact.input1')} />
          <input type="text" placeholder={t('contact.input2')} />
          <input type="number" placeholder={t('contact.input3')} />
          <button className={styles.btn}>Oтправить</button>
        </div>
      </div>
    </section>
  );
}
