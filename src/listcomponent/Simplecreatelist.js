import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.main`
 
  flex-grow: 8;
  display: flex;
  flex-direction: column;
 
`;

const Form = styled.form`
  display: flex;
  width: 90%;
  padding:25px 0px 25px 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  font-size: 1.3rem;
  margin-top: 8px;
`;

const Button = styled.button`
  margin-left: auto;
  border: none;
  background-color: transparent;
  color: #c62828;
  cursor: pointer;
  padding-right:30px;

 
`;

const Simplecreatelist = () => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      content: content,
      date: date,
    };

    fetch("http://localhost:3001/lists/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setContent("");
        setDate("");
        navigate("/");
        navigate(0);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <Wrapper>
    
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>Todo</span>
          <Input
            type="text"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter a todo item"
          />
        </Label>
        <Label>
          <span>Date</span>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Label>
        <Button type="submit">Add</Button>
      </Form>
    </Wrapper>
  );
};

export default Simplecreatelist;
