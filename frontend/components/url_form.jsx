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
    // i should do a validation to make sure it's a proper url
    // send rails the long url for processing
    const that = this;
    this.props.processUrl(this.state.longUrl, this.props.authToken)
      .then((response) => {
        // if success
        // render the short link 
        console.log(that.props.shortUrl);
        // if not, render some kind of error
      });
  }
  
  handleOnChange(event) {
    this.setState({ longUrl: event.target.value });
  }
  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="url-form">
        <input 
          onChange={this.handleOnChange} 
          className="url-form-input" 
          placeholder="Your URL" 
          value={this.state.longUrl }/>
        <input className="button" type="submit" value="Go" />
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