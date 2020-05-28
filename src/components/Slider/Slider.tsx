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
          <img className="pagination__button--img" src="./img/svg/arrow-next.svg" alt="next" />
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
          <img className="pagination__button--img" src="./img/svg/arrow-next.svg" alt="next" />
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
