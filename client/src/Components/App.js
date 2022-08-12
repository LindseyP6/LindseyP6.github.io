import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header.jsx';
import MainPage from './MainPage';
import Contact from './Contact';


function App() {
  const [catsArray, setCatsArray] = useState([])


  useEffect(()=>{
    fetch("/cats")
    .then(r => r.json())
    .then(cats => setCatsArray(cats))
  }, [])

  return (
    <div className="app">
      <Header />

      <Switch>

      <Route exact path="/contact">
          <Contact />
      </Route>

      <Route path="/">
         <MainPage 
          catsArray={catsArray}/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
