import React, { Component } from "react";
import UrlForm from "./url_form.jsx";

class App extends Component {
  render() {
    return (
      <div>
        Hello, welcome to SJ's URL shortener!
        <UrlForm />
      </div>
    );
  }
};

export default App;