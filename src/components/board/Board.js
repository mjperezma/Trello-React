import React from 'react';
import List from './List';

const Board = (props) => {
  // events

  const handleNewList = () => {
    props.handleAction({
      action: 'add-list',
    });
  };

  // render

  const renderNewListButton = () => {
    return (
      <div>
        <button type='button' className='btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm' title='Añadir una nueva lista' onClick={handleNewList}>
          <span className='fas fa-plus'></span>
        </button>
      </div>
    );
  };

  const renderList = () => {
    return props.list.map((list) => {
      return <List key={list.id} list={list} handleAction={props.handleAction} />;
    });
  };

  return (
    <main className='app-board d-flex flex-nowrap'>
      {renderList()}
      {renderNewListButton()}
    </main>
  );
};

export default Board;
