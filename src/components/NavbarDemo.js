import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const ENOTICE_BASE = process.env.REACT_APP_ENOTICE_FRONT_URL;

class NavbarDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    window.location.assign(`${ENOTICE_BASE}/auth/login`);
  }

  render() {
    return (
      <React.Fragment>
        <nav
          id="main_navbar"
          className="navbar navbar-expand-lg  fixed-top navbar-custom sticky custom-share"
        >
          <div className="container">
            <Link className="nav-item active" to="/demo">
              <img src="images/logo.png" alt="" height="40" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                <li className="nav-item active">
                  <a href="/#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#features" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#clients" className="nav-link">
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#contact" className="nav-link">
                    Contact us
                  </a>{" "}
                </li>
                <Button onClick={this.handleClick.bind(this)}>Login</Button>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavbarDemo;
