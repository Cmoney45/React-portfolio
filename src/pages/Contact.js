// client.src.pages.Home.js

import React, { Component } from "react";
import "./css-temp/contact-css.css";

class Home extends Component {

  render() {
    return (
      <div
        // className="hidden-part"
        id="contactBody"
      >
        <form id="body" method="post">
          Name
          <input type="text" name="name"></input>
          E-mail
          <input type="email" name="email"></input>

          Message
          <textarea name="message"></textarea>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Home;
