import React, { Component } from "react";
import { connect } from "react-redux";

class ShortUrl extends Component {
  constructor() {
    super();
    
    this.copyShortUrl = this.copyShortUrl.bind(this);
  }
  
  copyShortUrl() {
    var copyTextarea = document.querySelector(".short-url-shortened-url");
    copyTextarea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
  }
  
  render() {
    const display = this.props.shortUrl ? "short-url" : "hidden";
    
    
    return (
      <div className={`${display} group`}>
        <textarea readOnly className="short-url-shortened-url"
          value={`${window.location.host}/${this.props.shortUrl}`} />
        <div className="button short-url-button" onClick={this.copyShortUrl}>
          COPY
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { shortUrl: state.url .shortUrl };
};

export default connect(mapStateToProps, null)(ShortUrl);