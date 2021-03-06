import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const Example = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        onClick={toggle}
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        Custom Dropdown Content
      </DropdownToggle>
      <DropdownMenu>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;