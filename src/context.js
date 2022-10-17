import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;
    }
  };
  state = {
    handler: this.handler,
    blogs: [],
    recommendations: [],
    skills: [],
    projects: [],
  };

  async componentDidMount() {
    const responseRecommendations = await axios.get("http://127.0.0.1:9000/api/recommendations");
    const responseSkills = await axios.get("http://127.0.0.1:9000/api/skills");
    const responseProjects = await axios.get("http://127.0.0.1:9000/api/projects");
    const responseBlogs = await axios.get("http://127.0.0.1:9000/api/blogs");
    
    this.setState({
      recommendations: responseRecommendations.data.payload,
      skills: responseSkills.data.payload,
      projects: responseProjects.data.payload,
      blogs: responseBlogs.data.payload,
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
