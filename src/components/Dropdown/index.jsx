import React from "react";
import { Multiselect } from 'multiselect-react-dropdown';

        <Multiselect
        isObject={false}
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}
        options={[
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
          'Option 5'
        ]}
        />

function Dropdown() {
    return(
        <div className="dropdown">
          <button className="btn bg-gradient-primary dropdown-toggle btn-sm w-100 mb-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Selecionar filtros
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="javascript:;">Opção 1</a></li>
            <li><a className="dropdown-item" href="javascript:;">Opção 2</a></li>
            <li><a className="dropdown-item" href="javascript:;">Opção 3</a></li>
            <li><a className="dropdown-item" href="javascript:;">Opção 4</a></li>
            <li><a className="dropdown-item" href="javascript:;">Opção 5</a></li>
          </ul>
        </div>
    );
}

export default Dropdown;