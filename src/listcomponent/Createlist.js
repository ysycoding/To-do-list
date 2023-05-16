import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.main`
  background-color: white;
  flex-grow: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#f5f5f5 ;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  width: 400px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const Input = styled.input`
  border: #f5f5f5;
  background-color:#f5f5f5;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
`


const Button = styled.button`
  border: none;
  background-color: #F3D7D7;
  color: black;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #303f9f;
  }
`

const Createlist = () => {
  const [content,setContent] = useState('');
  const [date , setDate]= useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      "content": content,
      "date":date
    };
    
    fetch('http://localhost:3001/lists/', {
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      setContent('');
      setDate('');
      navigate("/");
      navigate(0);
    })
    .catch((error) => {
        console.error('Error', error);
    });
  };
  

  return (
    <Wrapper>
      <h2>Add a List</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>Todo</span>
          <Input type="text"
          required
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          placeholder="내용을 입력해주세요" />
        </Label>
        <Label>
          <span>Date</span>
          <Input type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)} />
        </Label>
        <Button type="submit">Add</Button>
      </Form>
    </Wrapper>
  )
}

export default Createlist
