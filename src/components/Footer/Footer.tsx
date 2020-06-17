import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { Logo } from '../Logo/Logo';

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const threshold = 200;

  const scrollTop = (e: any) => {
    e.preventDefault();
    let heightOfPage = window.pageYOffset;
    const intervalScrolling = setInterval(() => {
      window.scrollTo(0, heightOfPage);
      heightOfPage -= 40;
      if (heightOfPage <= -40) {
        clearInterval(intervalScrolling);
      }
    }, 10);
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  });


  return (
    <div className="footer">
      <Logo />
      <ul className="footer__list">
        <li className="footer__item">
          <a href="https://github.com/AlenaLoik?tab=repositories" className="footer__link">
            Github
          </a>
        </li>
        <li className="footer__item">
          <a href="https://drive.google.com/file/d/1BuQAs-mWhC-MMw7FhkvU6Lixlr6TQzTM/view?usp=sharing" className="footer__link">
            Contacts
          </a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">
            rights
          </a>
        </li>
      </ul>
      <a href="#" className={isVisible ? "scrollTop" : "scrollTop hidden"} onClick={scrollTop}>
        <p className="scrollTop__text">Back to top</p>
        <img className={isVisible ? 'scrollTop__img' : 'scrollTop__img hidden'} src="./img/svg/arrow-next.svg" alt="scrollTop" />
      </a>
    </div>
  );
};
