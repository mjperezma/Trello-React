import React from 'react';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import Card from './Card';

const List = (props) => {
  console.log(props);
  const cardElement = props.list.cards.map((item) => {
    return <Card card={item} key={item.id} />;
  });

  return (
    <>
      <div className='app-list'>
        <div className='p-1 rounded-sm bg-primary shadow'>
          <ListHeader title={props.list.title} id={props.list.id} />
          {cardElement}
          <ListFooter id={props.id} handleNewCard={props.handleNewCard} />
        </div>
      </div>
    </>
  );
};

export default List;
