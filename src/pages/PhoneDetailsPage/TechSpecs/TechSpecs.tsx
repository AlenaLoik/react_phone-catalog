import React from 'react';
import './TechSpecs.scss';
import { IProductDetails } from '../../../interfase/interfase';

type Props = {
  itemDetails: IProductDetails;
};

export const TechSpecs: React.FC<Props> = ({ itemDetails }) => {
  const {
    camera, connectivity, android, display, storage, hardware,
  } = itemDetails;

  return (
    <section className="tech-specs">
      <h2 className="tech-specs__title">Tech specs</h2>
      <div className="description item__description">
        <span className="description__wrapper">
          <p className="description__wrapper--title">Screen</p>
          <p className="description__wrapper--value">{display.screenSize}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__wrapper--title">Resolution</p>
          <p className="description__wrapper--value">{display.screenResolution}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__wrapper--title">Processor</p>
          <p className="description__wrapper--value">{android.os}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__wrapper--title">RAM</p>
          <p className="description__wrapper--value">{storage.ram}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__wrapper--title">Built in memory</p>
          <p className="description__wrapper--value">{storage.flash}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__camera--title">Camera</p>
          <p className="description__camera--value">{camera.primary}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__wrapper--title">Zoom</p>
          <p className="description__wrapper--value">{hardware.cpu}</p>
        </span>
        <span className="description__wrapper">
          <p className="description__wrapper--title">Cell</p>
          <p className="description__wrapper--value">{connectivity.cell}</p>
        </span>
      </div>
    </section>
  );
};
