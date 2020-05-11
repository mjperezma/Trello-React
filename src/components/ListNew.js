import React from 'react';

const ListNew = (props) => {
  const handleAddNewList = () => {
    props.handleEventAdd(props.id);
  };
  return (
    <div>
      <button id={props.id} onClick={handleAddNewList} type='button' className='btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm' title='Añadir una nueva lista'>
        <span className='fas fa-plus'></span>
      </button>
    </div>
  );
};

export default ListNew;
