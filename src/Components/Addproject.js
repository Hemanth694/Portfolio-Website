import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
import axios from "axios";

class Addproject extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
    submitMsg: "",
    submitTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  onSubmit = async (handler, event) => {

    event.preventDefault();

    const newProject = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.title,
      excerpt: this.state.excerpt,
      body: this.state.body,
    };

    const response =await axios.post("http://127.0.0.1:9000/api/addproject", newProject);

    const isSubmitted = response.data.isSubmitted;


    if (isSubmitted) {
      this.setState({
        submitMsg: `Project published successfully!!`,
        submitTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMsg: `Oops publishing failed :(`,
        submitTextColor: "text-danger",
      });
    }

    handler("ADD_PROJECT", newProject);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl,
            title,
            body,
            submitTextColor,
            submitMsg,
          } = this.state;
          const { handler } = value;
          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-center mt-3 font-weight-light">
                Add <span className="text-info">Project</span>
              </h1>
              <div className="row mx-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Featured Image Url*</label>
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        className="form-control"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Title*</label>
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="excerpt">Excerpt*</label>
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="Excerpt"
                        id="Excerpt"
                        className="form-control"
                        required
                      ></input>
                    </div>
                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block my-5"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish!
                    </button>
                  </form>
                  <div className="text-center my-4 py-4">
                    <h4 className={submitTextColor}>{submitMsg}</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={title}></img>
                  </div>
                  <div className="text-center">
                    <h1 className="font-weight-light my-5">{title}</h1>
                  </div>
                  <ReactMarkdown source={body} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Addproject;
