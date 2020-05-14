import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
  // events

  const handleMoveToUp = () => {
    props.handleAction({
      action: 'move-card-up',
      cardId: props.card.id,
    });
  };

  const handleMoveToDown = () => {
    props.handleAction({
      action: 'move-card-down',
      cardId: props.card.id,
    });
  };

  // render

  const renderTagsContainer = () => {
    return <div>{rendeTags()}</div>;
  };

  const rendeTags = () => {
    return props.card.tags.map((tag) => {
      return (
        <span key={tag} className='badge badge-secondary bg-success mr-1'>
          {tag}
        </span>
      );
    });
  };

  const renderTitle = () => {
    return (
      <div>
        <h3 className='h6'>{props.card.title}</h3>
      </div>
    );
  };

  const renderInfo = () => {
    return (
      <div className='text-black-50'>
        <small className='pr-2 fas fa-align-left'></small>
        <small className='far fa-check-square'></small>
        <small title='Subtareas completadas: 3 de 5'> 3/5</small>
      </div>
    );
  };

  const renderUpBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm app-card-up-button' title='Mover esta tarjeta hacia arriba' onClick={handleMoveToUp}>
        <span className='fas fa-arrow-up'></span>
      </button>
    );
  };

  const renderDownBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm app-card-down-button' title='Mover esta tarjeta hacia abajo' onClick={handleMoveToDown}>
        <span className='fas fa-arrow-down'></span>
      </button>
    );
  };

  return (
    <Link to={`/card/${props.card.id}`}>
      <article className='app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm' title='Abrir la tarjeta'>
        {renderTagsContainer()}
        {renderTitle()}
        {renderInfo()}
        <div className='app-card-btns btn-group-vertical btn-group-sm'>
          {renderUpBtn()}
          {renderDownBtn()}
        </div>
      </article>
    </Link>
  );
};

export default Card;
