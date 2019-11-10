import React from "react";
import logo from "./images/logo.svg";
import chevronRight from "./images/icon-arrow.svg";
// import banner from "./images/hero-mobile.jpg";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header className="logo-container">
        <img alt="Site logo" src={logo} />
      </header>
      <div className="hero-container">
        {/* <img alt="Hero Banner" src={banner} /> */}
      </div>
      <div className="content-container">
        <h1>
          <span>WE'RE</span> COMING SOON
        </h1>
        <p>
          Hello fellow shoppers! We’re currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form>
          <input id="email-input" type="email" placeholder="Email Address" />
          <button id="submit-button" type="submit">
            <img alt="Right chevron" src={chevronRight} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
