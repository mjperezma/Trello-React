import React from 'react';

const Menu = (props) => {
  const handleCloseBtn = () => {
    props.toggleMenu();
  };

  const renderHeader = () => {
    return (
      <header className='d-flex justify-content-between align-items-start mb-4'>
        <h2 className='h4 font-weight-light'>Menú</h2>
        <button type='button' className='close pl-2 pr-2 pb-1' onClick={handleCloseBtn}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </header>
    );
  };

  const renderTitle = () => {
    return <h5 className='h5'>Tareas por etiquetas</h5>;
  };

  const renderTags = () => {
    const tags = [];
    for (const tag in props.data) {
      tags.push(renderTag(tag));
      tags.push(renderCardsContainer(props.data[tag], tag));
    }
    return tags;
  };

  const renderTag = (tag) => {
    return (
      <h6 className='h5' key={'title' + tag}>
        <span className='badge badge-secondary bg-success'>{tag}</span>
      </h6>
    );
  };

  const renderCardsContainer = (cards, tag) => {
    return <ul key={'ul' + tag}>{cards.map((card) => renderCard(card))}</ul>;
  };

  const renderCard = (card) => {
    return (
      <li key={card.id}>
        <small>{card.title}</small>
      </li>
    );
  };

  return (
    <section className={props.isMenuOpen ? 'app-menu show' : 'app-menu'}>
      <div className='app-menu-inner bg-light p-2 shadow'>
        {renderHeader()}
        <main>
          {renderTitle()}
          {renderTags()}
        </main>
      </div>
    </section>
  );
};

export default Menu;
