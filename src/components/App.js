import React, {useState} from 'react';
import '../assets/scss/App.scss';
import Header from './Header';
import List from './List';
import Main from './Main';
import board from '../api/board.json';

function App() {
  const apiList = board.board.list;
  const [list, setList] = useState(apiList);
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('');

  function handleFilter(data) {
    setFilter(data.value);
  }
  function handleEventAdd() {
    const newList = [...list];
    newList.push({title: '', cards: []});
    setList(newList);
  }
  list.map((item, i) => (item.id = i));

  function handleNewCard(id) {
    function addNewCard() {
      for (const item of list) {
        console.log(item.cards);
        if (item.id === parseInt(id)) {
          item.cards.push({id: '', title: '', description: '', tags: Array(0)});
        }
      }
      return setList(list);
    }
    addNewCard();
  }
  console.log(list);
  const renderFilterList = list.filter((list) => {
    return list.title.toUpperCase().includes(filter.toUpperCase());
  });
  return (
    <>
      <Header handleFilter={handleFilter} />
      <p>Estas buscando por {filter} </p>
      <Main handleEventAdd={handleEventAdd} cards={cards} list={list} handleNewCard={handleNewCard} renderFilterList={renderFilterList} />
    </>
  );
}

export default App;
