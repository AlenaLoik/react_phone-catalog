import React from 'react';
import './SliderWithItems.scss';
import { ProductListSlider } from '../ProductListSlider/ProductListSlider';
import { IProduct} from '../../interfase/interfase';

type Props = {
  itemsForSlider: IProduct[];
  title: string;
}

export const SliderWithItems: React.FC<Props> = ({ itemsForSlider, title }) => {

  const handleChangePagePrew = () => {

  }

  const handleChangePageNext = () => {

  }

  return (
 <div className="slider-item">
   <span className="slider-item__header">
   <h1 className="slider-item__title">{title}</h1>
   <div className="slider-item__buttons">
     <button
        onClick={handleChangePagePrew}
        disabled={false}
        className={(false)
          ? "pagination__button pagination__button--left disabled"
          : "pagination__button pagination__button--left"}
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
      <button
        disabled={false}
        onClick={handleChangePageNext}
        className={false
          ? "pagination__button pagination__button--right disabled"
          : "pagination__button pagination__button--right"}
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
      </div>
   </span>
  <div className="slider-item__items">
    <ProductListSlider items={itemsForSlider} />
  </div>
 </div>
);
}
