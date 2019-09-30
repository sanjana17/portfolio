import React from 'react';
import './Skills.css';
import imagesFile from './skillsImages.json'

const Skills = () => {
    return (
    <div className="parallax-container col s12 m6">
      <div className="card container">
        <div className="card-content ">
          <span className="card-title left-align teal darken-2 white-text z-depth-4">
              SKILLS
          </span>
          <div class="card">
            <div class="card-content">
              <h4 class="brown-text light left-align">HTML5</h4>
              <div class="row text-center">
                <div class="col s2 m1">
                  <img alt="" src={imagesFile.html5} class="responsive-img"/>HTML5
                </div>
                <div class="col s2 m1">
                  <img alt="" src={imagesFile.js} class="responsive-img"/>JAVASCRIPT
                </div>
              </div>
            </div>
           </div>
           <div class="card">
            <div class="card-content">
              <h4 class="brown-text light left-align">SCRIPTING LANGUAGES</h4>
              <div class="row text-center">
                <div class="col s2 m1">
                  <img alt="" src={imagesFile.html5} class="responsive-img"/>HTML5
                </div>
                <div class="col s2 m1">
                  <img alt="" src={imagesFile.js} class="responsive-img"/>JAVASCRIPT
                </div>
              </div>
            </div>
           </div>
           <div class="divider"></div>
           <div class="section">
            <h5>Section 1</h5>
            <p>Stuff</p>
           </div>
           <div class="divider"></div>
           <div class="section">
            <h5>Section 1</h5>
            <p>Stuff</p>
           </div>
        </div>
      </div>
        </div>
    )
}

export default Skills;