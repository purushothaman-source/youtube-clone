import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
const NavbarWrapper = styled.div`
  min-height: 3rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 0 15px;

  .gap-4 {
    gap: 15px;
  }
  .search-wrapper {
    input {
      min-width: 30rem;
    }
  }
  .row-center {
    align-items: center;
  }
`;
const Navbar = ({ setIsOpen = () => {} }) => {
  return (
    <NavbarWrapper className="d-flex row-center">
      <div className="icons  d-flex gap-4 row-center">
        <Icon name="menu" onClick={() => setIsOpen(prev => !prev)} />
        <Icon name="video" color="red" />
        <span>Youtube</span>
      </div>
      <div className="search-wrapper d-flex gap-4 row-center">
        <input type="text" disabled />
        <Icon name="search" />
        <Icon name="mic" />
      </div>
      <div className="user-wrapper  d-flex gap-4 row-center">
        <Icon name="AddVideo" />
        <Icon name="notification" />
        <Icon name="profile" />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
