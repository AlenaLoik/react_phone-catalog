import React from 'react';
import './Footer.scss';
import { Logo } from '../Logo/Logo';

export const Footer = () => {

  const scrollTop = () => {
    let i = window.pageYOffset;
    let int = setInterval(function () {
      window.scrollTo(0, i);
      i -= 40;
      if (i <= -40) clearInterval(int);
    }, 10);
  };

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
          <a href="https://docs.google.com/document/d/1iySEp5jUAeVVIlg449jUn1rV6RPRqLCl/edit" className="footer__link">
            Contacts
            </a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">
            rights
            </a>
        </li>
      </ul>
      <a href="#" className="scrollTop" onClick={scrollTop}>
        <p className="scrollTop__text">Back to top</p>
        <svg
          className="scrollTop__img"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514
          4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083
          5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167
          5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159
          8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097
          5.73159 0.788864 5.73159 0.528514 5.47124Z"
            fill="#313237" />
        </svg>
      </a>
    </div>
  );
}
