import React from 'react';
import MainPage from '../../components/MainPage/MainPage';
import About from '../../components/About/About';
import Team from '../../components/Team/Team';

import Development from '../../components/Development/Development';
import Questions from '../../components/Questions/Questions';
import Contacts from '../../components/Contacts/Contacts';

export default function Home() {
  return (
    <div>
      <MainPage />
      <About />
      <Team />
      <Development />
      <Questions />
      <Contacts />
    </div>
  );
}
