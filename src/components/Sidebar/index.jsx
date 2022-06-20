import React from "react";
import Form from "../Form";

function Sidebar() {
    return(
      <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
      id="sidenav-main">
        <Form/>
      </aside>

    );
}

export default Sidebar;