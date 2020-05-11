import React from 'react';
import List from './List';
import ListNew from './ListNew';
const Main = (props) => {
  const listElement = props.list.map((item, index) => {
    return <List list={item} id={index} cards={props.cards} handleNewCard={props.handleNewCard} />;
  });
  return (
    <main id={props.id} className='app-board d-flex flex-nowrap'>
      {listElement}
      <ListNew handleEventAdd={props.handleEventAdd} id={props.id} />
    </main>
  );
};

export default Main;
