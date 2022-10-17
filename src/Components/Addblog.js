import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
import axios from "axios";

class Addblog extends Component {
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

  onSbumit = async (handler, event) => {
    event.preventDefault();

    const newBlog = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.title,
      excerpt: this.state.excerpt,
      body: this.state.body,
    };

    const res = await axios.get("", newBlog);
    let isSubmitted = res.data.isSubmitted;

    if (isSubmitted) {
      this.setState({
        submitMsg: `Blog published Successfully!!`,
        submitTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMsg: `Oops please try again later :(`,
        submitTextColor: "text-danger",
      });
    }

    handler("ADD_BLOG", newBlog);
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
            <div className="container-fluid text-center my-5 py-5">
              <div className="font-weight-light text-center mt-5">
                <h1 className="text-center">
                  Add <span className="text-info">Blog</span>
                </h1>
              </div>
              <div className="row mx-5 py-5">
                <div className="col-12 col-lg-6 px-lg-6">
                  <form onSubmit={this.onSbumit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Featured Image Url*</label>
                      <input
                        onChange={this.onChange}
                        className="form-control"
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Title*</label>
                      <input
                        onChange={this.onChange}
                        className="form-control"
                        type="text"
                        name="title"
                        id="title"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="excerpt">Excerpt*</label>
                      <input
                        onChange={this.onChange}
                        className="form-control"
                        type="text"
                        name="excerpt"
                        id="excerpt"
                        required
                      ></input>
                    </div>
                    <SimpleMDE
                      onBodyChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      className="btn btn-dark btn-block my-5"
                      type="submit"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish!!
                    </button>
                  </form>
                  <div className="text-center my-4 py-4">
                    <h4 className={submitTextColor}>{submitMsg}</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img className="img-fluid" src={imageUrl} alt={title}></img>
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

export default Addblog;
