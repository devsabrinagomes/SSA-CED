import React from "react";
import Header from '../Header/index';
import Datapicker from '../Datapicker/index';
import Dropdown from '../Dropdown/index';

function Form() {
  return (
    <form style="margin-left: 15px; margin-right: 15px;">
      <Header />
      <Datapicker />
      <Dropdown />
    </form>

  );
}

export default Form;