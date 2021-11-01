import React from 'react';
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'

import SideBar from './containers/SideBar'
import DemoPage from './containers/DemoPage'

function App() {
  return (
    <Provider store={store}>
      <div className="App">     
        <SideBar/>    
        <DemoPage/>  
      </div>
    </Provider>
  );
}

export default App;
