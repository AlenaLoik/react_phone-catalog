import React from 'react';
import './HomePage.scss';
import { Slider } from '../../components/Slider/Slider';
import { SliderWithItems } from '../../components/SliderWithItems/SliderWithItems';
import { Category } from '../../components/Category/Category';
import { IProduct } from '../../interfase/interfase';

type Props = {
  items: IProduct[];
};

export const HomePage: React.FC<Props> = ({ items }) => {
  const hotItems = items.filter(item => (item.discount > 0))
    .sort((a, b) => b.discount - a.discount);
  const newModels = items.filter(item => (item.discount === 0))
    .sort((a, b) => (b.price - a.price));
  const phones = items.filter(phone => phone.type === 'phone');
  const countPhones = (phones) ? phones.length : 0;
  const tablets = items.filter(tablet => tablet.type === 'tablet');
  const countTablets = (tablets) ? tablets.length : 0;
  const accessories = items.filter(accessories => (accessories.type !== 'tablet'
    && accessories.type !== 'phone'));
  const countAccessories = (accessories.length) ? accessories.length : 0;

  return (
    <div className="home__main">
      <Slider />
      <SliderWithItems itemsForSlider={hotItems} title="Hot prices" />
      <Category
        countPhones={countPhones}
        countTablets={countTablets}
        countAccessories={countAccessories}
      />
      <SliderWithItems itemsForSlider={newModels} title="Brand new models" />
    </div>
  );
};
