import React from 'react';
import './Projects.css';


class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            projectMetadata: [],
        }
    }
    componentDidMount() {
        fetch('https://api.github.com/users/sanjana17/repos')
            .then(res => res.json())
            .then(result => {
                this.setState({ projects: result });
                for(var i =0 ; i< result.length; i++){
                    this.fetchReadMe(result[i].url);
                }
            })
    }

    getProjectMetadata = (name) => {
        const {projectMetadata} = this.state;
        let data = {};
        for(var i =0 ; i<projectMetadata.length; i++){
            if(projectMetadata[i].name.startsWith(name)){
               data = projectMetadata[i];
            }
        }
        return data;
    }

    fetchReadMe = (val) =>{
        fetch(`${val}/contents/projectMetadata.json`)
            .then(res => res.json())
            .then(result => {
                if(result.content !== undefined) {
                    this.state.projectMetadata.push(JSON.parse(atob(result.content)));
                }
            })
    }
    render() {
        const {projects, projectMetadata} = this.state;
        projects.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        return (
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content ">
                      <span className="card-title left-align blue darken-2 white-text z-depth-4">
                          Projects
                      </span>
                        <div className="row">
                            <div className="col">
                              {projects.map((value, index) => {
                                  const {html_url, url, name} = value;

                                  return (
                                      <div className="card col s12 m5 project">
                                          <div className="card-image waves-effect waves-block waves-light">
                                              <img className="activator" src={this.getProjectMetadata(name).image} />
                                          </div>
                                          <div className="card-content">
                                              <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
                                              <p><a href={html_url} target="_blank">Git Link</a></p>
                                          </div>
                                          <div className="card-reveal">
                                              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                                              <p>{this.getProjectMetadata(name).description}</p>
                                          </div>
                                      </div>
                              )})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;