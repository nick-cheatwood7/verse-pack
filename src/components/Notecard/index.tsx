import React from 'react';
import { Verse } from '../../types';

import './Notecard.css';

interface ComponentProps {
  title: string;
  content?: string;
}

function renderCard(title, text) {
  if (!text) {
    return <div className="title-centered">{title}</div>;
  } else {
    return (
      <>
        <div className="card-title">
          <span className="title">{title}</span>
        </div>
        <div className="card-content">
          <span className="content">{text}</span>
        </div>
      </>
    );
  }
}

const Notecard: React.FC<ComponentProps> = ({ title, content }) => {
  return <div className="card">{renderCard(title, content)}</div>;
};

export default Notecard;
