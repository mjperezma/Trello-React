import React, {useState} from 'react';
import '../assets/scss/App.scss';
import Header from './Header';
import List from './List';
import Main from './Main';
import board from '../api/board.json';

function App() {
  const apiList = board.board.list;
  const [list, setList] = useState(apiList);
  const [listAdd, setListAdd] = useState('');
  const [filter, setFilter] = useState('');

  function handleFilter(data) {
    setFilter(data.value);
  }
  function handleEventAdd(data) {
    setListAdd(data);
  }
  function addNewList() {
    console.log(list.length);
  }
  addNewList();
  return (
    <>
      <Header handleFilter={handleFilter} />
      <p>Estas buscando por {filter} </p>
      <Main handleEventAdd={handleEventAdd} id={list.length} list={list} />
    </>
  );
}

export default App;
