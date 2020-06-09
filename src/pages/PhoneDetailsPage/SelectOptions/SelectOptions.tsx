import React, { useContext, useState, useEffect } from 'react';
import './SelectOptions.scss';
import { IProduct } from '../../../interfase/interfase';
import { MyContext } from '../../../App';

const capacitys = [{ gb: '64 GB' }, { gb: '256 GB' }, { gb: '512 GB' }];

type Props = {
  item: IProduct;
  resolution: string;
  processor: string;
}

export const SelectOptions: React.FC<Props> = ({ item, resolution, processor }) => {
  const [selectCapacity, setIsSelectCapacity] = useState('64 GB');
  const [numColor, setNumColor] = useState('1');
  const { basket, setBasket, favorites, setFavorites } = useContext(MyContext);
  const [isFavorites, setIsFavorites] = useState(favorites.filter(product => product.id === item.id).length > 0);
  const [isItemOnBascket, setIsItemOnBascket] = useState(basket.filter(product => product.id === item.id).length > 0);
  const { price, discount, ram, screen } = item;
  const priceWithDiscount = `$${price - (price * (discount / 100))}`;
  const price$ = `$${price}`;
  const colorCount = 4;

  console.log(numColor)

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

  const handleChangeCapacity = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setIsSelectCapacity(target.value)
  }

  const handleChangeColor = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setNumColor(target.value)
  }

  const addToBasket = () => {
    if (!isItemOnBascket) {
      setBasket([...basket, item]);
    } else {
      setBasket([...basket].filter(product => product.id !== item.id));
    }
  }

  return (
    <>
      <span className="item__header">
        <p>Available colors</p>
        <p>ID: 802390</p>
      </span>
      <section className="item__details">
        <span className="item__colors">
          {Array(colorCount).fill('button').map((item, index) => (
            <div className={(String(index + 1) === numColor)
              ? "item__color selected"
              : "item__color"}>
              <input onClick={handleChangeColor}
                type={item}
                value={index + 1} />
            </div>
          ))}
        </span>
        <span className="item__capacity">
          <p >Select capacity</p>
          <div className="buttons__wrap">
            {capacitys.map(capacity => (
              <input
                type="button"
                onClick={handleChangeCapacity}
                className={(selectCapacity === capacity.gb)
                  ? "pagination__button pagination__button--page active"
                  : "pagination__button pagination__button--page"}
                value={capacity.gb} />
            ))}
          </div>
        </span>
        <span className="item__price">
          <h1 className="item__price--discount">{priceWithDiscount}</h1>
          <p className="item__price--value">{(price$ === priceWithDiscount)
            ? '' : price$}</p>
        </span>
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
        <div className="description item__description">
          <span className="description__screen">
            <p className="item__description__screen--title">Screen</p>
            <p className="item__description__screen--value">{screen}</p>
          </span>
          <span className="description__resolution">
            <p className="description__resolution--title">Resolution</p>
            <p className="description__resolution--value">{resolution}</p>
          </span>
          <span className="description__processor">
            <p className="description__processor--title">Processor</p>
            <p className="description__processor--value">{processor}</p>
          </span>
          <span className="description__ram">
            <p className="description__ram--title">RAM</p>
            <p className="description__ram--value">{ram}</p>
          </span>
        </div>
      </section>

    </>
  )
}
