import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

const App = ({addItem, items}) => (
  <div className="App">
    <button onClick={() => addItem()}>
      Click
    </button>
    <ul>{items.map(item => <li>{item}</li>)}</ul>
  </div>
)

export default connect(
  state => ({items: state.items}),
  dispatch => ({addItem: () => dispatch(addItem())})
)(App);
