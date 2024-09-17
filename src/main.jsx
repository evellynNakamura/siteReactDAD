import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header.jsx';
import heroApple from "./assets/heroApple.png";
import styles from './index.module.css';
import Section from './Components/Section/Section.jsx'
import {secoes} from '../public/Sections/data.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />

    <img className={styles.banner} src={heroApple} alt="" />

    <Section 
      subtitle = {secoes[0].subtitle} 
      title={secoes[0].title} 
      time={true} 
      seta={true} 
      botao={false} 
      cardProduto={true}
    />

    <Section subtitle = {
      secoes[1].subtitle} title={secoes[1].title} 
      time={false} 
      seta={true} 
      botao={false}
    />

    <Section subtitle = {
      secoes[2].subtitle} title={secoes[2].title} 
      time={false} 
      seta={false} 
      botao={true}
    />

    <Section subtitle = {
      secoes[3].subtitle} title={secoes[3].title} 
      time={false} 
      seta={true} 
      botao={false}
    />

  </StrictMode>
)
