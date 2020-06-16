import React, { useMemo } from 'react';
import './HomePage.scss';
import { Slider } from '../../components/Slider/Slider';
import { SliderWithItems } from '../../components/SliderWithItems/SliderWithItems';
import { Category } from '../../components/Category/Category';
import { IProduct } from '../../interfase/interfase';

type Props = {
  items: IProduct[];
};

export const HomePage: React.FC<Props> = ({ items }) => {

  const hotItems = useMemo(() =>
    items.filter(item => (item.discount > 0))
      .sort((a, b) => b.discount - a.discount)
    , [items]);

  const newModels = useMemo(() =>
    items.filter(item => (item.discount === 0))
      .sort((a, b) => (b.price - a.price))
    , [items]);

  const phones = useMemo(() =>
    items.filter(phone => phone.type === 'phone')
    , [items]);

  const tablets = useMemo(() =>
    items.filter(tablet => tablet.type === 'tablet')
    , [items]);

  const accessories = useMemo(() =>
    items.filter(accessories => (accessories.type !== 'tablet'
      && accessories.type !== 'phone'))
    , [items]);

  return (
    <div className="home__main">
      <Slider />
      <SliderWithItems itemsForSlider={hotItems} title="Hot prices" />
      <Category
        countPhones={(phones) ? phones.length : 0}
        countTablets={(tablets) ? tablets.length : 0}
        countAccessories={(accessories.length) ? accessories.length : 0}
      />
      <SliderWithItems itemsForSlider={newModels} title="Brand new models" />
    </div>
  );
};
