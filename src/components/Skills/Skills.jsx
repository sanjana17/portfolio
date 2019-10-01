import React from 'react';
import './Skills.css';
import imagesFile from './skillsImages.json'

const Skills = () => {
    return (
    <div className="col s12 m6">
      <div className="card container">
        <div className="card-content ">
          <span className="card-title left-align teal darken-2 white-text z-depth-4">
              SKILLS
          </span>
            {imagesFile.languages.map(imageFile => (
              <div class="card" key={imageFile.skill}>
                <div class="card-content">
                  <h4 class="brown-text light left-align">{imageFile.skill}</h4>
                    <div class="row text-center">
                    {imageFile.images.map(image => (
                        <div class="col s2 m1"  key={image.name}>
                          <img alt="" src={image.source} class="responsive-img"/>{image.name}
                        </div>
                    ))}
                    </div>
                </div>
               </div>
            ))}
        </div>
      </div>
        </div>
    )
}

export default Skills;