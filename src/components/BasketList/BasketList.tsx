import React, { useContext, useState } from 'react';
import './BasketList.scss';
import { IProduct } from '../../interfase/interfase';
import { MyContext } from '../../App';

export const BasketList = () => {
  const { basket, setBasket } = useContext(MyContext);
  const [basketItems, setBasketItems] = useState<IProduct[]>(basket);

  const removeAll = (id: string) => {
    setBasketItems(basketItems.filter(product => product.id !== id));
    setBasket(basket.filter(product => product.id !== id));
  };

  const removeOneItem = (item: IProduct) => {
    const indexItem = basket.lastIndexOf(item);

    setBasket(basket.slice(0, (indexItem)).concat(basket.slice(indexItem + 1)));
  };

  return (
    <>
      {basketItems.map(item => (
        <div key={item.id} className="basket-items">
          <div className="basket-items__info">
            <button
              onClick={() => removeAll(item.id)}
              className="basket-items__remove"
            >
              +
            </button>
            <img className="basket-items__img" src={item.imageUrl} alt="phone" />
            <p className="basket-items__name">{item.name}</p>
          </div>
          <section className="basket-items__controler">
            <section className="basket-items__controler__buttons">
              <button
                onClick={() => removeOneItem(item)}
                disabled={basket.filter(prod => prod.id === item.id).length < 2}
                className="basket-items__controler--button"
              >
                -
              </button>
              <p className="basket-items__controler--count">
                {basket.filter(prod => prod.id === item.id).length}
              </p>
              <button
                onClick={() => {setBasket([...basket, item]);}}
                className="basket-items__controler--button"
              >
                +
              </button>
            </section>
            <p className="basket-items__controler--price">
              {`$${(basket.filter(prod => prod.id === item.id).length)*
                (item.price - (item.price * (item.discount / 100)))}`}
            </p>
          </section>
        </div>
      ))}
    </>
  );
};
