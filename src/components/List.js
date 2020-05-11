import React from 'react';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import Card from './Card';

const List = (props) => {
  console.log(props.id);
  const cardElement = props.list.cards.map((item, index) => {
    return <Card card={item} id={index} />;
  });

  return (
    <>
      <div className='app-list'>
        <div className='p-1 rounded-sm bg-primary shadow'>
          <ListHeader title={props.list.title} />
          {cardElement}
          <ListFooter />
        </div>
      </div>
    </>
  );
};

export default List;
