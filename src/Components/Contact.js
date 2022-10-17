import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    submitMessage: "",
    submitTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let isSubmitted = true;
    const { name } = this.state;

    if (isSubmitted) {
      this.setState({
        submitMessage: `Thank You ${name} I will contact You soon!`,
        submitTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: `OOps...something went wrong please try again later`,
        submitTextColor: "text-danger",
      });
    }
  };
  render() {
    const { submitTextColor, submitMessage } = this.state;
    return (
      <div className="container">
        <h1 className="text-center font-weight-light my-5">
          <span className="text-info">Thank You!</span> For your intrest!!
        </h1>
        <div className="row text-center">
          <div className="col-11 col-lg-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail*</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Tell me about your Project*</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: "black" }}
              >
                Lets do some Business
              </button>
            </form>
          </div>
        </div>
        <div className="font-weight-light text-center mx-5 py-5">
          <h5 className={submitTextColor}> {submitMessage}</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
