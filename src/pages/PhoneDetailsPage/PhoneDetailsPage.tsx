import React from 'react';
import './PhoneDetailsPage.scss';
import { SliderWithItems } from '../../components/SliderWithItems/SliderWithItems';
import { IProduct } from '../../interfase/interfase';

type Props = {
  items: IProduct[];
}

export const PhoneDetailsPage: React.FC<Props> = ({ items }) => {
  const likeItems = items.sort((a, b) => b.price - a.price);
  return(
  <>
  <p>details</p>
  <SliderWithItems title={"You may also like"} itemsForSlider={likeItems} />
    </>
);
}
