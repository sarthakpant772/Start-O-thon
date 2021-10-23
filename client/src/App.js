import React from "react";
// import './App.css';
import Path from "./Path";
import android from "./images/android.png";


// import { Route, Link } from 'react-router-dom';

// import Home from './Home';
// import Course from './Course';
// import About from './About';

function App() {
  return (
    <div className="App">
      <Path
        title="Web Design"
        data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos animi, non, iure enim optio error blanditiis, nulla necessitatibus repellendus quod? Qui fugit dolorum praesentium, dolor tenetur explicabo suscipit id minus nihil quae, deleniti nam mollitia quam, alias similique sed. Possimus ipsa rerum dignissimos quod, doloribus deleniti similique assumenda placeat?"
        img={android} side="left"
      />

    </div>
  );
}

export default App;
