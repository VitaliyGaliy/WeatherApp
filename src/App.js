import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Search from "./containers/Search";
import CitiesList from "./containers/CitiesList";

import { store, persistor } from "./reducers";
console.log('store', store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Search />
          <CitiesList />
        </PersistGate>
      </Provider >
    );
  }
}

export default App;
