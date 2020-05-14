import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Board from './board/Board';
import Edit from './edit/Edit';
import Header from './header/Header';
import Menu from './menu/Menu';
import api from '../services/api';
import ls from '../services/local-storage';
import state from '../services/state';
import '../styles/app.scss';

function App() {
  // state

  const [data, setData] = useState({
    board: {
      list: [],
    },
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterText, setFilterText] = useState('');

  // effects

  useEffect(() => {
    if (ls.isValid()) {
      const lsData = ls.get();
      setData(lsData);
    } else {
      api.getApiData().then(setData);
    }
  }, []);

  useEffect(() => {
    ls.set(data);
  });

  // eventos

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const handleAction = (evData) => {
    if (evData.action === 'add-list') {
      state.addList(data);
    } else if (evData.action === 'delete-list') {
      state.deleteList(data, evData.listId);
    } else if (evData.action === 'move-list-to-left') {
      state.moveListToLeft(data, evData.listId);
    } else if (evData.action === 'move-list-to-right') {
      state.moveListToRight(data, evData.listId);
    } else if (evData.action === 'set-list-title') {
      state.setListTitle(data, evData.listId, evData.value);
    } else if (evData.action === 'add-card') {
      state.addCard(data, evData.listId);
    } else if (evData.action === 'delete-card') {
      state.deleteCard(data, evData.cardId);
    } else if (evData.action === 'set-card-title') {
      state.setCardTitle(data, evData.cardId, evData.value);
    } else if (evData.action === 'set-card-description') {
      state.setCardDescription(data, evData.cardId, evData.value);
    } else if (evData.action === 'move-card-up') {
      state.moveCardUp(data, evData.cardId);
    } else if (evData.action === 'move-card-down') {
      state.moveCardDown(data, evData.cardId);
    }
    setData({...data});
  };

  // render

  const getListData = () => {
    return data.board ? state.filter(data.board.list, filterText) : [];
  };

  const getMenuData = () => {
    return state.groupCardByTags(data);
  };

  const renderEdit = (props) => {
    const cardId = props.match.params.id;
    if (state.existsCard(data, cardId)) {
      const card = state.getCard(data, cardId);
      const list = state.getListOfCard(data, cardId);
      return <Edit card={card} list={list} handleAction={handleAction} />;
    }
  };

  return (
    <div className='app'>
      <Header filterText={filterText} toggleMenu={toggleMenu} handleFilter={handleFilter} />
      <Board list={getListData()} handleAction={handleAction} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} data={getMenuData()} />
      <Switch>
        <Route path='/card/:id' render={renderEdit} />
      </Switch>
    </div>
  );
}

export default App;
