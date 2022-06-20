import React from "react";

function Datapicker() {
    return(
        <div>
        <div class="form-group">
          <label for="example-date-input" class="form-control-label">Início</label>
          <input class="form-control"  type="date" id="example-date-input"/>
        </div>
          <div class="form-group">
            <label for="example-date-input" class="form-control-label">Fim</label>
            <input class="form-control"  type="date" id="example-date-input"/>
        </div>
        </div>
    );
}

export default Datapicker;