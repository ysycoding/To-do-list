import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ showSidebar }) => showSidebar ? '0' : '300px'};
  bottom: 0;
  width: 300px;
  background-color: #F3D7D7;
  border: 1px solid black;
  z-index: 1000;
  transition: right 1s ease-in-out;
  box-shadow: ${({ showSidebar }) =>
    showSidebar ? '-8px 0px 15px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;

  a {
    color: #333;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
      color: gray;
    }
  }
`;


const Button = styled.button`

  background-color: #f3d7d7;
  border: none;
  cursor: pointer;
  margin:10px 0px 0px 10px;
`;

const CloseButton = styled(Button)`
  align-self: flex-end;
`;

const Sidebar = ({ showSidebar, onSidebarToggle }) => {
  return (
    <Wrapper showSidebar={showSidebar}>
      <CloseButton onClick={onSidebarToggle}>
      <FontAwesomeIcon icon={faAngleRight}  size="3x" className="flex" />
        </CloseButton>
      <Nav>
      <Link to="/profile">profile</Link>
        <Link to="/">To do List</Link>
        <Link to="/create">Add a List</Link>
        <Link to="/calendar">Calendar</Link>
      </Nav>
    </Wrapper>
  );
};

export default Sidebar;
