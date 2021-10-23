import React from "react";
// import "./home.css";
import ScriptTag from 'react-script-tag';

function Home() {
	return (
		<div>
      <div id="slides">
  <ul class="roller">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
<ul id="steps" class="roller">
  <li>01</li>
  <li>02</li>
  <li>03</li>
  <li>04</li>
  <li>05</li>
</ul>
<div id="titles">
  <ul class="roller">
    <li>
      <h2>First</h2>
      <h2>Slide</h2>
      <p>First, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Second</h2>
      <h2>Slide</h2>
      <p>Secondly, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Third</h2>
      <h2>Slide</h2>
      <p>Thirdly, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Fourth</h2>
      <h2>Slide</h2>
      <p>Fourthly, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Fifth</h2>
      <h2>Slide</h2>
      <p>Lastly, use the up and down arrow keys to navigate.</p>
    </li>
  </ul>
</div>
    </div>
	);
}

export default Home;