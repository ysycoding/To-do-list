import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const List = styled.main`
  display: flex;
  flex-direction: column;
  width:95%;
 
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height:7.5%;
`;

const CheckButton = styled.button`
  margin-right: 8px;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ReviseButton = styled.button`


  border: none;
  background-color: transparent;
  color: #c62828;
  cursor: pointer;

`;

const DeleteButton = styled.button`

  border: none;
  background-color: transparent;
  
  color: #1e88e5;
  cursor: pointer;

`;



const EditForm = styled.form`
  display: flex;
  width: 90%;
  padding:25px 0px 25px 0px;
 
  
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
const CancelButton = styled.button`

  border: none;
  background-color: transparent;
  color: #1e88e5;
  cursor: pointer;
  padding-right:30px;
`






const ToDoList = ({ lists }) => {
  
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});
  const [isEditing, setIsEditing] = useState(null);
  
  const [editedContent, setEditedContent] = useState("");
const [editedDate, setEditedDate] = useState("");


  useEffect(() => {
    const localStorageCheckedItems = localStorage.getItem("checkedItems");
    if (localStorageCheckedItems) {
      setCheckedItems(JSON.parse(localStorageCheckedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleDeleteClick = (id) => {
    /* delete 버튼을 누르면 다시 home으로 리다이렉트 되어야 합니다. */
    /* useNavigate()를 이용하여 handleDeleteClick 로직을 작성해주세요. */
 

    fetch(`http://localhost:3001/lists/${id}`, {
      method: "DELETE",
    })
      .then(() => {
       
        navigate(0);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleReviseClick = (id) => {
    setIsEditing(id);
  
  };
  


  const handleCheckClick = (itemId) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
  
    if (!editedContent && !editedDate) {
      return;
    }

  
    fetch(`http://localhost:3001/lists/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: editedContent || lists.find((list) => list.id === id).content,
        date: editedDate || lists.find((list) => list.id === id).date,
      }),
    })
      .then(() => {
        setIsEditing(null);
  
        navigate(0);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  
  
  return (
   

    <List>
      {lists.map((list) => (
        <ListItem key={list.id}>
          <CheckButton onClick={() => handleCheckClick(list.id)}>
            {checkedItems[list.id] === true ? "☑" : "☐"}
          </CheckButton>
          {isEditing === list.id ? (
  <EditForm onSubmit={(e) => handleEditSubmit(e,list.id)}>
    <Label>
     
      <Input
        type="text"
        required
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        placeholder="Enter a todo item"
      />
    </Label>
    <Label>
     
      <Input
        type="date"
        value={editedDate}
        onChange={(e) => setEditedDate(e.target.value)}
      />
    </Label>
    <Button type="submit">save</Button>
    <CancelButton onClick={() => setIsEditing(null)}>Cancel</CancelButton>
  </EditForm>
          ) : (
            <div>
              <div>
                <h2>{list.content}</h2>
                <p>Date: {list.date}</p>
              </div>
              <div>
    <ReviseButton onClick={() => handleReviseClick(list.id)}>revise</ReviseButton>
    <DeleteButton onClick={() => handleDeleteClick(list.id)}>delete</DeleteButton>
    </div>
            </div>  
          )}
        </ListItem>
      ))}
    </List>
  );
  
 
          }

export default ToDoList; 