import React, { useState } from 'react';
import './PhoneImeges.scss';

type Props = {
  images: string[];
}

export const PhoneImeges: React.FC<Props> = ({ images }) => {
  const [imgSelected, setImgSelecnted] = useState(images[0]);

  return (
    <div className="phone-imeges ">
      <div className="phone-imeges__container--small">
        {images.map(img => (
          <img
          className={img === imgSelected
            ? "phone-imeges__img active"
            : "phone-imeges__img"}
          src={img}
          onClick={() => setImgSelecnted(img)}
          alt="phone-img-small" />
        ))}
      </div>
      <div className="phone-imeges__container--big">
        <img className="phone-imeges__imege--big" src={imgSelected} alt="phone-img-big" />
      </div>
    </div>
  );
}



