import React from 'react';
import './About.scss';

type Props = {
  description: string;
  features: string;
};

export const About: React.FC<Props> = ({ description, features }) => {
  return (
    <div className="about">
      <h2 className="about__title">About</h2>
      <section className="about__articles">
        <article className="about__articles article">
          <h3 className="article__title">And then there was Pro</h3>
          <p className="article__text">{description}</p>
        </article>
        <article className="about__articles article">
          <h3 className="article__title">Features</h3>
          <p className="article__text">{features}</p>
        </article>
      </section>
    </div>
  );
};
