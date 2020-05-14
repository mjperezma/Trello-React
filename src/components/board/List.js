import React from 'react';
import Card from './Card';

const List = (props) => {
  // events

  const handleTitle = (ev) => {
    props.handleAction({
      action: 'set-list-title',
      value: ev.currentTarget.value,
      listId: props.list.id,
    });
  };

  const handleDelete = () => {
    props.handleAction({
      action: 'delete-list',
      listId: props.list.id,
    });
  };

  const handleMoveToLeft = () => {
    props.handleAction({
      action: 'move-list-to-left',
      listId: props.list.id,
    });
  };

  const handleMoveToRight = () => {
    props.handleAction({
      action: 'move-list-to-right',
      listId: props.list.id,
    });
  };

  const handleNewCard = () => {
    props.handleAction({
      action: 'add-card',
      listId: props.list.id,
    });
  };

  // render

  const renderInput = () => {
    return <input className='app-list-input form-control form-control-sm' placeholder='Tareas importantes' type='text' value={props.list.title} title='Editar el título de la lista' onChange={handleTitle} />;
  };

  const renderEllipsis = () => {
    return <span className='pl-2 pr-2 text-white-50 fas fa-ellipsis-v'></span>;
  };

  const renderDeleteBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm' title='Borrar esta tarjeta' onClick={handleDelete}>
        <span className='fas fa-trash-alt'></span>
      </button>
    );
  };

  const renderLeftBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm app-list-left-button' title='Mover esta lista hacia la izquierda' onClick={handleMoveToLeft}>
        <span className='fas fa-arrow-left'></span>
      </button>
    );
  };

  const renderRightBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm app-list-right-button' title='Mover esta lista hacia la derecha' onClick={handleMoveToRight}>
        <span className='fas fa-arrow-right'></span>
      </button>
    );
  };

  const renderCards = () => {
    return props.list.cards.map((card) => {
      return <Card key={card.id} card={card} handleAction={props.handleAction} />;
    });
  };

  const renderNewCardBtn = () => {
    return (
      <button type='button' className='ml-1 btn btn-primary btn-sm text-white-50' title='Añadir una nueva tarjeta' onClick={handleNewCard}>
        <span className='fas fa-plus'></span> Añadir otra tarjeta
      </button>
    );
  };

  return (
    <div className='app-list'>
      <div className='p-1 rounded-sm bg-primary shadow'>
        <form className='app-list-form align-middle p-1 position-relative'>
          {renderInput()}
          <div className='app-list-options'>
            {renderEllipsis()}
            <div className='app-list-btns btn-group btn-group-sm'>
              {renderDeleteBtn()}
              {renderLeftBtn()}
              {renderRightBtn()}
            </div>
          </div>
        </form>
        {renderCards()}
        {renderNewCardBtn()}
      </div>
    </div>
  );
};

export default List;
