import React, { useEffect, useState } from 'react';
import './PhoneDetailsPage.scss';
import { Link } from 'react-router-dom';
import { SliderWithItems } from '../../components/SliderWithItems/SliderWithItems';
import { SelectOptions } from './SelectOptions/SelectOptions';
import { TechSpecs } from './TechSpecs/TechSpecs';
import { About } from './About/About';
import { PhoneImeges } from './PhoneImeges/PhoneImeges';
import { IProduct, IProductDetails } from '../../interfase/interfase';
import { getDetails } from '../../helpers/api';

type Props = {
  items: IProduct[];
  item: IProduct;
};

export const PhoneDetailsPage: React.FC<Props> = ({ items, item }) => {
  const likeItems = items.sort((a, b) => b.price - a.price);
  const [itemDetails, setItemDetails] = useState<IProductDetails>({} as IProductDetails);
  const {
    display, android, description, images,
  } = itemDetails;

  useEffect(() => {
    getDetails(item.id).then(setItemDetails);
  }, []);

  if (JSON.stringify(itemDetails) === JSON.stringify({})) {
    return (
      <>
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <h1>Loading...</h1>
      </>
    );
  }


  return (
    <>
      <section className="nav-location">
        <Link to="/" className="nav-location__svg--home">
          <img src="./img/svg/HOME.svg" alt="HOME" />
        </Link>
        <div className="nav-location__svg--arrow">
          <img src="./img/svg/arrow-next.svg" alt="next" />
        </div>
        <Link to="/phones">
          <p className="nav-location__text">Phones</p>
        </Link>
        <div className="nav-location__svg--arrow">
          <img src="./img/svg/arrow-next.svg" alt="next" />
        </div>
        <p className="nav-location__text">{item.name}</p>
      </section>
      <section className="nav-location">
        <div className="nav-location__svg--arrow nav-location__svg--arrow--back">
          <img src="./img/svg/arrow-next.svg" alt="next" />
        </div>
        <Link to="/phones">
          <p className="nav-location__text--back">Back</p>
        </Link>
      </section>
      <h1 className="item__title phone-details">{item.name}</h1>
      <div className="item__info--wraper">
        <section className="item__info--left">
          <PhoneImeges images={images} />
          <About description={description} />
        </section>
        <section className="item__info--right">
          <SelectOptions
            processor={android.os}
            resolution={display.screenResolution}
            item={item}
          />
          <TechSpecs itemDetails={itemDetails} />
        </section>
      </div>
      <SliderWithItems title="You may also like" itemsForSlider={likeItems} />
    </>
  );
};
