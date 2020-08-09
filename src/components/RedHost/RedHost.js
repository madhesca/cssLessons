import React from "react";
import "./RedHost.css";

function RedHost() {
  return (
    <div>
      <div className="container">
        <header>
          <div className="head">
            <h1 className="heading">
              <span style={{ color: "red", fontWeight: "bold" }}> RED</span>HOST
            </h1>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="main">
          <h4>SMART COMPANY WITH PERFECT SPACE</h4>
          <h1>POWERFUL WEB HOSTING</h1>
          <p className="ponly">
            The most powerful web hosting company with vast variety of services
            and cater big companies around the Globe.
          </p>
          <p className="getStarted">
            <a href="">GET STARTED</a>
          </p>
        </div>
      </div>
      <div className="form">
        <div className="right">
          <input type="text" placeholder="Enter Your Domain Name" />{" "}
          <button>Search</button>
        </div>
        <div className="left">
          <h2>Search our Domain Now!</h2>
        </div>
        <div className="checkbox">
          <p>
            <input type="checkbox" /> (50 PHP)
          </p>
          <p>
            <input type="checkbox" /> (15 PHP)
          </p>
          <p>
            <input type="checkbox" /> (25 PHP)
          </p>
          <p>
            <input type="checkbox" /> (95 PHP)
          </p>
        </div>
      </div>
      <div className="pricing">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." Section
          1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem{" "}
        </p>
      </div>
    </div>
  );
}

export default RedHost;
