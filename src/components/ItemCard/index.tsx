import React from 'react';
import './ItemCard.css';

interface ComponentProps {
  term?: string;
  content?: string;
  showContent: boolean;
  edit: boolean;
}

const ItemCard: React.FC<ComponentProps> = ({
  term,
  content,
  showContent,
  edit,
}) => {
  function renderContent() {
    if (!showContent) {
      if (!edit) {
        return <span className="title-centered">{term}</span>;
      } else {
        return (
          <input
            type="text"
            className="title-edit"
            placeholder="Reference..."
          />
        );
      }
    } else if (showContent) {
      return (
        <div>
          <div className="term-block">
            <span>{term}</span>
          </div>
          <div className="content">
            {!edit === true ? (
              <p>{content}</p>
            ) : (
              <input
                type="text"
                className="content-edit"
                placeholder="Content..."
              />
            )}
          </div>
        </div>
      );
    }
  }

  return <div className="card">{renderContent()}</div>;
};

export default ItemCard;
