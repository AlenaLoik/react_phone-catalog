import React from 'react';
import './About.scss';

type Props = {
  description: string;
};

export const About: React.FC<Props> = ({ description }) => {
  return (
    <div className="about">
      <h2 className="about__title">About</h2>
      <section className="about__articles">
        <article className="about__articles article">
          <h3 className="article__title">And then there was Pro</h3>
          <p className="article__text">{description}</p>
        </article>
        <article className="about__articles article">
          <h3 className="article__title">Camera</h3>
          <p className="article__text" />
        </article>
        <article className="about__articles article">
          <h3 className="article__title">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h3>
          <p className="article__text" />
        </article>
      </section>
    </div>
  );
};
