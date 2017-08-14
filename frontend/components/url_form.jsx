import React, { Component } from "react";

class UrlForm extends Component {
  render() {
    return (
      <form>
        <input placeholder="Your URL" />
        <input type="submit" value="Go" />
      </form>
    )
  };
};

export default UrlForm;