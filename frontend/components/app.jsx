import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UrlForm from "./url_form.jsx";
import ShortUrl from "./short_url.jsx";
import TopHundred from "./top_hundred.jsx";
import { setAuthToken } from "../actions/action_auth";

class App extends Component {
  constructor() {
    super();
    
    this.state = { displayTopHundred: false };
    this.displayTopHundred = this.displayTopHundred.bind(this);
  }
  
  displayTopHundred() {
    this.setState({ displayTopHundred: true });
  }
  
  displayButtonOrTopHundred() {
    if (this.state.displayTopHundred) {
      return (
        <TopHundred />
      );
    } else {
      return (
        <div onClick={this.displayTopHundred} className="button">
          VIEW TOP 100 VISITED LINKS
        </div>
      );
    }
  }
  
  render() {
    return (
      <div className="app">
        <UrlForm />
        <ShortUrl />
        <TopHundred />
      </div>
    );
  }
  
  componentDidMount() {
    const token = $('meta[name=csrf-token]').attr('content');
    this.props.setAuthToken(token);
  }
};

function mapStateToProps(state) {
  return { authToken: state.auth.authToken };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setAuthToken }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);