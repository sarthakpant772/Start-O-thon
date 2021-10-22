import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';


import Home from './Home';
import Course from './Course';
import About from './About';

function App() {
  return (
    <div className="App">
      <div id="navbar">
     <ul>
     <li>
     <Link to="/" >Home</Link>
     </li>
     <li>
       <Link to="/about" >About</Link>
     </li>
    <li>
    <Link to="/course" >Course</Link>
    </li>
</ul>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/course" component={Course} />
    
    </div>
    </div>
  );
}

export default App;
