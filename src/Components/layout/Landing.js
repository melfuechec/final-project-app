import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div style={{ color: 'turquoise',height: "75vh", opacity: 1 }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
            NearBy helps you plan a fun night out! 
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Pick a main event and it will show you the highest-rated bars and restaurants nearby for a hassle free, easy going good time.
            </p>
            <br />
            <a href= '/register/'
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </a>
            <a href='/login'
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;