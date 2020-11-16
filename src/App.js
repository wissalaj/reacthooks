import React,{ useState } from 'react';
import './App.css';
import  {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Description from './components/Description';
//import Trailer from './components/Trailer'; <Route path="/:title/:linkTrailer" component ={Trailer} />

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:title" component={Description}/>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
