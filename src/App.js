import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { useState } from 'react';
import AppDataStore from './utils/AppDataStore';

const App = () => {

  return (
    <Provider store={AppDataStore}>
    <div className="">
      <Head />
      <Body />
    </div>
    </Provider>
  )
};

export default App;