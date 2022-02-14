import React from 'react';
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'

import SideBar from './containers/SideBar'
import DemoPage from './containers/DemoPage'
import Test from './Test'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    
function App() {
  return (
    <Provider store={store}>
      <div className="App">     
        <SideBar/>    
        <DemoPage/>  
        <Test/>
      </div>
    </Provider>
  );
}

export default App;
