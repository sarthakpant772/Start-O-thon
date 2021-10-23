import React from "react";
import "./path.css";

function Path(props) {
  return (
    <div>
      <h1>Our Process</h1>

      <div class="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li class="step step01 active">
              <div class="step-inner">HOME WORK</div>
            </li>
            <li class="step step02">
              <div
                class="step-inner"
                onClick={() => {
                  "na"
                    .addClass("section-content discovery active")
                }}
              >
                RESPONSIVE PART
              </div>
            </li>
            <li class="step step03">
              <div class="step-inner">Creative cREATIONS</div>
            </li>
            <li class="step step04">
              <div class="step-inner">TESTIMONIALS PART</div>
            </li>
            <li class="step step05">
              <div class="step-inner">OUR LOCATIONS</div>
            </li>
          </ul>

          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div class="na">
            <h2>HOME SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div class="section-content strategy na">
            <h2>GALLERY SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div class="section-content creative na">
            <h2>Creative CREATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div class="section-content production na">
            <h2>TESTIMONIALS NOW</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div class="section-content analysis na">
            <h2>OUR LOCATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
