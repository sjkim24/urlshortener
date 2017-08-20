import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UrlForm from "./url_form.jsx";
import ShortUrl from "./short_url.jsx";
import { setAuthToken } from "../actions/action_auth";

class App extends Component {
  render() {
    return (
      <div>
        Hello, welcome to SJ's URL shortener!
        <UrlForm />
        <ShortUrl />
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