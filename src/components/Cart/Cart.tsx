import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfase/interfase';

type Props = {
  phone: IProduct;
};

export const Cart: React.FC<Props> = ({ phone }) => {
  const { price, ram, imageUrl, discount, name, screen, capacity } = phone;
  const priceWithDiscount = `$${price - (price * (discount / 100))}`;
  const price$ = `$${price}`;
  const corectSrc = `../../../${imageUrl}`;
  return (
    <div className="item">
      <div className="item__picture">
        <img className="item__img" src={corectSrc} alt="monoblock" />
      </div>
      <div className="item__title">
        <Link to={`/phones/${name}`}>
          {phone.name}
        </Link>
      </div>
      <span className="item__price">
        <p className="item__price--discount">{priceWithDiscount}</p>
        <p className="item__price--value">{(price$ === priceWithDiscount)
          ? '' : price$}</p>
      </span>
      <div className="description item__description">
        <span className="description__screen">
          <p className="item__description__screen--title">Screen</p>
          <p className="item__description__screen--value">{screen}</p>
        </span>
        <span className="description__capacity">
          <p className="description__screen--title">Capacity</p>
          <p className="description__screen--value">{capacity}</p>
        </span>
        <span className="description__ram">
          <p className="description__screen--title">ram</p>
          <p className="description__screen--value">{ram}</p>
        </span>
      </div>
      <div className="item__button">
        <input className="item__button--add-to-cart" type="button" value="Add to cart" />
        <button className="item__button--favorites" type="button">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62852 0.631371C10.1584 0.411797 10.7264 0.298782 11.3 0.298782C11.8737 0.298782 12.4416 0.411797 12.9716 0.631371C13.5015 0.850945 13.983 1.17277 14.3885 1.57847C14.7941 1.98394 15.1158 2.46532 15.3353 2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66667C15.6679 5.24028 15.5549 5.80827 15.3353 6.33819C15.1158 6.86806 14.794 7.34949 14.3884 7.75497C14.3883 7.75501 14.3884 7.75493 14.3884 7.75497L8.49502 13.6483C8.22165 13.9217 7.77844 13.9217 7.50507 13.6483L1.61174 7.75497C0.792668 6.9359 0.33252 5.82501 0.33252 4.66667C0.33252 3.50833 0.792668 2.39743 1.61174 1.57836C2.43081 0.759288 3.54171 0.299139 4.70005 0.299139C5.85839 0.299139 6.96928 0.759288 7.78835 1.57836L8.00005 1.79005L8.21162 1.57847C8.21166 1.57844 8.21158 1.57851 8.21162 1.57847C8.61711 1.17283 9.09865 0.850924 9.62852 0.631371ZM13.3983 2.56819C13.1228 2.29256 12.7957 2.07392 12.4357 1.92474C12.0756 1.77556 11.6898 1.69878 11.3 1.69878C10.9103 1.69878 10.5245 1.77556 10.1644 1.92474C9.80441 2.07392 9.4773 2.29256 9.2018 2.56819L8.49502 3.27497C8.22165 3.54834 7.77844 3.54834 7.50507 3.27497L6.7984 2.56831C6.24189 2.01179 5.48708 1.69914 4.70005 1.69914C3.91301 1.69914 3.15821 2.01179 2.60169 2.56831C2.04517 3.12483 1.73252 3.87963 1.73252 4.66667C1.73252 5.4537 2.04517 6.20851 2.60169 6.76502L8.00005 12.1634L13.3984 6.76502C13.674 6.48953 13.8928 6.16231 14.042 5.80228C14.1911 5.44226 14.2679 5.05637 14.2679 4.66667C14.2679 4.27696 14.1911 3.89107 14.042 3.53105C13.8928 3.17103 13.6739 2.84369 13.3983 2.56819Z" fill="#333333" />
          </svg>
        </button>
      </div>
    </div>
  )
}
