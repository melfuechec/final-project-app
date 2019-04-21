import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ActivityPicker from "../ActivityPicker";
import DatePicker2 from "../DatePicker2"
// import Results from '../Results'
import Background from "../../backgroundImage";

class Dashboard extends Component {
  state = {
    events: null,
    date: null,
    isLoading: true
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

// handlePickActivity = (event) => {
//   // set categoryId in state
//   this.setState({
//     categoryId: event.target.value
//   // categoryId: this.state.categoryId
//   });
//   console.log("event.target.value", event.target.value)
//   console.log("value", this.categoryId)
//   console.log("state",this.state)
//   console.log('activity picked!')
// }
// handlePickDate = (event) => {
// // create a function to handle date picker and set state
// this.setState({
//   date: event.target.value
// });
// console.log("event.target.value", event.target.value)
// console.log("state",this.state)
// console.log('date picked!')
// }
eventfetch=()=> {
    const activity = localStorage.getItem("activity");
    const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=`+ activity + `&token=TG6RXBBLAZPSB67I4NIP`;
    fetch(eventbrite)
    .then(response => response.json())
    .then(data => {
        this.setState({ events: data.events, isLoading: false });
    })
    .catch(error => {
    console.log("something bad happened somewhere, rollback!", error);
    });

      return this.state.isLoading ? (
           <div> Loading...</div>
      ): (
        <ul style={{ backgroundImage: `url(${Background})`}} >
                 {this.state.events.map((event, id) =>
                 ( 
                 <React.Fragment key={id}>
                 
                 <h1 key={id+"name"}> {event.name.text} </h1>
                 <h5 key={id+"text"}>{event.summary} </h5>
                 <link key={id+"url"} href = {`event.resource_uri`}></link>
            
                 </React.Fragment>
                 ))} 
          </ul>
      )};
render() {

    // const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              {/* <b>Hey there,</b> {user.username.split(" ")[0]} */}
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>NearBy</span> 👏
              </p>
            </h4>
            <ActivityPicker />
            <DatePicker2 handlePickDate={this.handlePickDate}></DatePicker2>

            <button 
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              
              onClick={this.eventfetch}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Search
            </button>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

// move fetch to inside search button / searchEvent function using setLocalStorage, onClick
// delete everything from Results and only fetch