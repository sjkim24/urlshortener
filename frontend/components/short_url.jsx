import React, { Component } from "react";
import { connect } from "react-redux";

class ShortUrl extends Component {
  render() {
    const display = this.props.shortUrl ? "short-url" : "hidden";
    
    return (
      <div className={display}>
        <a href={this.props.shortUrl}>
          {this.props.shortUrl}
        </a>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { shortUrl: state.url .shortUrl };
};

export default connect(mapStateToProps, null)(ShortUrl);