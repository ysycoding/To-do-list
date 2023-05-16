import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Wrapper = styled.footer`
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: #F3D7D7;
  flex-grow: 1;
`

const Button = styled.button`
  background-color: #F3D7D7;
  border:none;
  cursor: pointer;
`

const Bottom =styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Made =styled.div`
  color: gray;
  padding-left: 10px;
`

const LinkWrapper = styled.div`
  display: inline-block;
 
`

const Footer = ({ onButtonClick }) => {
  return (
    <Wrapper>
      <Bottom>
        <LinkWrapper>
            <Button onClick={onButtonClick}>
              <FontAwesomeIcon icon={faSquarePlus} size="3x" />
            </Button> 
       
        </LinkWrapper>
        <Made>made by so young</Made>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
