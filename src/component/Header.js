import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck,faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'



const Wrapper = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color: #F3D7D7;
  flex-grow: 1;
  text-align: left;
  padding:10px;

  `
  const Title = styled.span`
  font-size:50px;
  padding-left:20px;
  `
  const Button = styled.button`
  background-color:#F3D7D7;
  border:none;
  cursor: pointer;;
  `


  

const Header = ({ onSidebarToggle }) => {
 
  
    return (
     
        <Wrapper>
            <span>
            <FontAwesomeIcon icon={faSquareCheck} size="3x"/>
            <Title>To do list</Title>
            </span> 
            <Button onClick={onSidebarToggle}>
            <FontAwesomeIcon icon={faBars} size="3x" className="flex" />
            </Button>
        </Wrapper>

    );
  };
  
  export default Header;
