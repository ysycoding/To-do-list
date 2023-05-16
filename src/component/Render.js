import styled from "styled-components";
import ToDoList from "../listcomponent/ToDoList";
import Loading from "./Loading";
import Simplecreatelist from "../listcomponent/Simplecreatelist";





const Wrapper = styled.main`
 background-color:#FFFFFF;
 flex-grow: 8;
 display:flex;
 flex-direction:column;

 padding-bottom:10px;
 `




const Render = ({lists,isPending,simple}) => {
   
  
   
    return (
          
          <Wrapper>
           
            {lists && <ToDoList lists={lists} />} 
            {simple &&<Simplecreatelist simple={simple}/>}

        </Wrapper>
    );
};

export default Render;