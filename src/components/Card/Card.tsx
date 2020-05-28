import React, { useState, useContext, useEffect } from 'react';
import './Card.scss';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { IProduct } from '../../interfase/interfase';
import { MyContext } from '../../App';

type Props = {
  item: IProduct;
};

export const Card: React.FC<Props> = ({ item }) => {
  const { price, ram, imageUrl, discount, name, screen, capacity, id } = item;
  const { basket, setBasket, favorites, setFavorites } = useContext(MyContext);
  const [isFavorites, setIsFavorites] = useState(favorites.filter(product => product.id === item.id).length > 0);
  const [isItemOnBascket, setIsItemOnBascket] = useState(basket.filter(product => product.id === item.id).length > 0);
  const history = useHistory();
  const location = useLocation();


  useEffect(() => {
    setIsFavorites(favorites.filter(product => product.id === item.id).length > 0)
  }, [favorites])

  useEffect(() => {
    setIsItemOnBascket(basket.filter(product => product.id === item.id).length > 0);
  }, [basket])

  const addToFavorites = () => {
    if (!isFavorites) {
      setFavorites([...favorites, item]);
    } else {
      setFavorites([...favorites].filter(product => product.id !== item.id));
    }
  }

  const addToBasket = () => {
    if (!isItemOnBascket) {
      setBasket([...basket, item]);
    } else {
      setBasket([...basket].filter(product => product.id !== item.id));
    }
  }

  const searchParams = new URLSearchParams(location.search);

  const priceWithDiscount = `$${price - (price * (discount / 100))}`;
  const price$ = `$${price}`;

  return (
    <div className="item">
      <div className="item__picture">
        <img className="item__img" src={imageUrl} alt={name} />
      </div>
      <div className="item__title">
        <NavLink
          to={`/products/${id}`}
          className="item__title__link"
          onClick={(event) => {
            const target = event.target as HTMLTextAreaElement;
            searchParams.set('itemId', target.value)
            history.push({
              search: searchParams.toString()
            });
          }}>
          {name}
        </NavLink>
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
        <input
          className={isItemOnBascket ? "item__button--add active" : "item__button--add"}
          type="button"
          value={isItemOnBascket ? "Remuve from cart" : "Add to cart"}
          onClick={addToBasket}
        />
        <button
          className="item__button--favorites"
          type="button"
          onClick={addToFavorites} >
          {isFavorites
            ? <img className="item__button--svg" src="./img/svg/heart.svg" alt="heart" />
            : <img className="item__button--active" src="./img/svg/heart-1.svg" alt="heart" />}
        </button>
      </div>
    </div>
  )
}
