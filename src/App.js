import React from 'react';  
import {Provider} from 'react-redux'; 
import store from './redux/store'
 
import Header from './common/header'
import Home from './pages/home'
import HomeB from './pages/homeB'
function App() {
  return (
    <Provider store= {store}> 
    <div className="App"> 
    <Header> </Header> 
    <Home/> 
    <HomeB/> 
     
    </div>
    </Provider>
  );
}

export default App;
