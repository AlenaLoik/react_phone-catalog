import React, { useState } from 'react';
import './SliderWithItems.scss';
import { ProductListSlider } from '../ProductListSlider/ProductListSlider';
import { IProduct} from '../../interfase/interfase';

type Props = {
  itemsForSlider: IProduct[];
  title: string;
}

export const SliderWithItems: React.FC<Props> = ({ itemsForSlider, title }) => {
  const [left, setLeft] = useState(0);
  const itemWidth = 288;
  const maxWidth = -((itemsForSlider.length - 4) * itemWidth);

  const handleChangePagePrew = () => {
    if(left >= 0) {
      return;
    }
    setLeft(left + itemWidth);
  }
  const handleChangePageNext = () => {
    if(left <= maxWidth) {
      return;
    }

    setLeft(left - itemWidth);
  }

  return (
 <div className="slider-item">
   <span className="slider-item__header">
   <h1 className="slider-item__title">{title}</h1>
   <div className="slider-item__buttons">
     <button
        onClick={handleChangePagePrew}
        disabled={left === 0}
        className={(left === 0)
          ? "pagination__button pagination__button--left disabled"
          : "pagination__button pagination__button--left"}
      >
        <img className="pagination__button--img" src="./img/svg/arrow-next.svg" alt="next" />
      </button>
      <button
        disabled={left === maxWidth}
        onClick={handleChangePageNext}
        className={(left === maxWidth)
          ? "pagination__button pagination__button--right disabled"
          : "pagination__button pagination__button--right"}
      >
        <img className="pagination__button--img" src="./img/svg/arrow-next.svg" alt="next" />
      </button>
      </div>
   </span>
  <div className="slider-item__items">
    <ProductListSlider items={itemsForSlider} left={left}/>
  </div>
 </div>
);
}
