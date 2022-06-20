import React from "react";

function Header() {
    return(
        <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true" id="iconSidenav"></i>
        <a className="navbar-brand m-0" href="#"
          target="_blank">
          <i className="ni ni-chart-pie-35 text-success" style="vertical-align: middle;"></i>
          <span className="ms-1 font-weight-bold">Self-Service Analytics</span>
        </a>
        <hr className="horizontal dark mt-0"/>
      </div>
    );
}

export default Header;
