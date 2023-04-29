import React from "react";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <nav style={{
      backgroundColor: props.mode == "light" ? "white" : `${(document.body.style.backgroundColor.slice(0, -4).toString() + " " + (parseInt(document.body.style.backgroundColor.slice(-4, -1)) + 65).toString() + ")").toString()
        }`
    }}
      className={`navbar navbar-expand-lg navbar-${props.mode == "light" ? "light" : "dark"} ${props.mode == "light" ? "bg-light" : ""}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {/* <div className="nav-item" style={{ float: "right" }}> */}
          <button onClick={props.lavenderMode} className="lavender"></button>
          <button onClick={props.greenMode} className="green"></button>
          <button onClick={props.grayMode} className="gray"></button>
          <div className="form-check form-switch">
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${props.mode === "light" ? "dark" : "light"
                }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {`${props.mode === "light" ? "Dark" : "Light"}`} Mode
            </label>
          </div>
          {/* </div> */}
        </div>


      </div>
    </nav>
  );
}

export default NavBar;
