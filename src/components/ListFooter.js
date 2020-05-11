import React from 'react';

const ListFooter = (props) => {
  console.log(props);
  const handleNewCard = (ev) => {
    props.handleNewCard(ev.currentTarget.id);
  };
  return (
    <button id={props.id} onClick={handleNewCard} type='button' className='ml-1 btn btn-primary btn-sm text-white-50' title='Añadir una nueva tarjeta'>
      <span className='fas fa-plus'></span>
      Añadir otra tarjeta
    </button>
  );
};

export default ListFooter;
