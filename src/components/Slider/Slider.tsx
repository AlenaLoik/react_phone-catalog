import React, { useState} from 'react';
import './Slider.scss';

const imagesArr = [
  { id: 1, url: "./img/slider/1.jpg" },
  { id: 2, url: "./img/slider/2.jpg" },
  { id: 3, url: "./img/slider/3.jpg" },
  { id: 4, url: "./img/slider/4.jpg" },
  { id: 5, url: "./img/slider/5.jpg" },
]

export const Slider = () => {
  const [left, setLeft] = useState(0);
  const [active, setActive] = useState(0);
  const itemWidth = 1040;
  const maxWhidth = -(itemWidth * (imagesArr.length - 1));


    setTimeout(() => {
      handleChangePageNext()
    }, 3000);

  const handleChangePagePrew = () => {
    if (active === 0) {
      setActive(imagesArr.length - 1)
      setLeft(maxWhidth)
      return
    }
    setActive(active - 1)
    setLeft(left + itemWidth);
  }

  const handleChangePageNext = () => {
    if (active === imagesArr.length - 1) {
      setActive(0)
      setLeft(0)
      return
    }
    setActive(active + 1);
   setLeft(left - itemWidth);
  }

  return (
    <div className="slider">
      <section className="slider__main">
        <button
          onClick={handleChangePagePrew}
          className="pagination__button pagination__button--left"
        >
          <svg
            className="pagination__button--img"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851
          0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132
          4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159
          8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097
          5.73159 0.788864 5.73159 0.528514 5.47124Z" />
          </svg>
        </button>
        <div className="slider__main__wraper">
        <ul className="slider__main__images" style={{ margin: `0 0 0 ${left}px` }}>
          {imagesArr.map((image) => (
            <li className="slider__main__image"  key={image.id}>
              <img src={image.url}  alt="banner" />
            </li>
          ))}
        </ul>
        </div>
        <button
          onClick={handleChangePageNext}
          className="pagination__button pagination__button--right"
        >
          <svg
            className="pagination__button--img"
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
          5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089
          9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851
          5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159
          0.788864 5.73159 0.528514 5.47124Z" />
          </svg>
        </button>
      </section>
      <section className="slider__naw">
      {Array(imagesArr.length).fill('').map((item, index) => (
        <div key={index} className={(index === active)
        ? "slider__naw--button active"
      : "slider__naw--button"}>{item}</div>
      ))}
      </section>
    </div>

  );
}
