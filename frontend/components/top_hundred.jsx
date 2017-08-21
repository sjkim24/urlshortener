import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTopHundredUrls } from "../actions/action_url";

class TopHundred extends Component {
  componentWillMount() {
    this.props.getTopHundredUrls();
  }
  
  renderTopHundredUrls() {
    const urls = this.props.topHundredUrls.map((url, i) => {
      return (
        <li className="top-hundred-list-item" key={`top-hundred-list-item-${i}`}>
          <div className="top-hundred-list-item-num">{i + 1}</div>
          <div className="top-hundred-list-item-long">
            Long URL
            <a href={url.longUrl} className="top-hundred-url">{url.longUrl}</a>
          </div>
          <div className="top-hundred-list-item-short">
            Short URL
            <a href={url.shortUrl} className="top-hundred-url">{`${window.location.host}/${url.shortUrl}`}</a>
          </div>
          <div className="top-hundred-list-item-visit-count">Visit Count: {url.visitCount}</div>
        </li>
      );
    });
    
    return urls;
  }
  
  render() {
    if (!this.props.topHundredUrls) {
      return <div className="loader">Loading...</div>;
    }
    
    return (
      <div className="top-hundred">
        <div className="top-hundred-header">
          TOP 100 VISITED URLS
        </div>
        <ul className="top-hundred-list">
          {this.renderTopHundredUrls()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { topHundredUrls: state.url.topHundredUrls };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTopHundredUrls }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHundred);