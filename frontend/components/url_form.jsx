import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { processUrl } from "../actions/action_url";

class UrlForm extends Component {
  constructor() {
    super();
    
    this.state = { longUrl: "" }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange= this.handleOnChange.bind(this);
  }
  
  handleOnSubmit(event) {
    event.preventDefault();
  
    const that = this;
    this.props.processUrl(this.state.longUrl, this.props.authToken)
      .then((response) => {
        if (response.payload.data.success) {
        } else {
          console.log("error");
        }
      });
  }
  
  handleOnChange(event) {
    this.setState({ longUrl: event.target.value });
  }
  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="url-form">
        <div className="url-form-inst">
          ENTER YOUR LONG LINK
        </div>
        <div className="url-form-input-button">
          <input 
            onChange={this.handleOnChange} 
            className="url-form-input" 
            placeholder="Your URL" 
            value={this.state.longUrl } 
            type="url" />
          <input className="button" type="submit" value="Let's Get It!" />
        </div>
      </form>
    )
  };
};

function mapStateToProps(state) {
  return { authToken: state.auth.authToken, shortUrl: state.url.shortUrl };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ processUrl }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlForm);