import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

class Writerecommendation extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    message: "",
    submitMsg: "",
    submitTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (handler, event) => {
    event.preventDefault();
    let isSubmitted = true;
    const { name } = this.state;
    if (isSubmitted) {
      this.setState({
        submitMsg: `ThankYou very much ${name} it means a lot!!`,
        submitTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMsg: `Oops something went wrong..please try again later :(`,
        submitTextColor: "text-danger",
      });
    }
    const newRecommendation = {
      id: uuid(),
      name: this.state.name,
      company: this.state.company,
      designation: this.state.designation,
      message: this.state.message,
    };

    handler("ADD_RECOMMENDATION", newRecommendation);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { submitMsg, submitTextColor } = this.state;
          const { handler } = value;
          return (
            <div className="container">
              <div className="font-weight-light">
                <h2 className="text-center">
                  <span className="text-info">Thank You!</span> for your
                  valuable time!!
                </h2>
              </div>
              <div className="row mx-3 py-5">
                <div className="col-12 col-md-6">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail*</label>
                      <input
                        onChange={this.onChange}
                        type="email"
                        name="email"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="comp">Company/Institution*</label>
                      <input
                        type="text"
                        name="comp"
                        className="form-control"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="desgn">Designation*</label>
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="desgn"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Recommendation*</label>
                      <textarea
                        onChange={this.onChange}
                        className="form-control "
                        rows="5"
                        name="description"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark float-right"
                      style={{ backgroundColor: "red" }}
                    >
                      Lots Of LOve!
                    </button>
                  </form>
                </div>
              </div>
              <div className="text-center font-weight-light py-5 mx-5">
                <h5 className={submitTextColor}>{submitMsg}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Writerecommendation;
