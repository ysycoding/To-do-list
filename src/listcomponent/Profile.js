import styled from "styled-components";
import { useState,useEffect } from "react";
import Dropzone from "react-dropzone";
import defaultprofile from "../defaultprofile.png"

const Wrapper = styled.main`
  background-color: white;
  flex-grow: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;
 
const Name = styled.h2`
  font-size: 2rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  color: gray;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 10px;

    input {
      margin-top: 10px;
      width: 250px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid gray;
      padding: 10px;
      font-size: 1rem;
      outline: none;
    }
  }
  div{
    display: flex;
  }

  button {
    margin: 20px 5px 0px 0px;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #343a40;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
   

    &:hover {
      background-color: #495057;
    }
  }
`;
const Button = styled.button`
  width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #343a40;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
 
`

const Profile = () => {
  const [file, setFile] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(localStorage.getItem("name") || "yoo so young");
  const [email, setEmail] = useState(localStorage.getItem("email") || "syy4242@gmail.com");

  const [fileUrl, setFileUrl] = useState("");
  
  useEffect(() => {
    const savedFileUrl = localStorage.getItem("fileUrl");
    if (savedFileUrl) {
      setFileUrl(savedFileUrl);
    }
  }, []);
 
  const handleDrop = (acceptedFiles) => {
    // 파일이 업로드되면 상태를 업데이트합니다.
    setFile(acceptedFiles[0]);
   setFileUrl(URL.createObjectURL(acceptedFiles[0]));
   // localStorage.setItem("fileUrl", URL.createObjectURL(acceptedFiles[0]));

  };

 

  const handleEditClick = () => {
    
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };
  const handleSaveClick = () => {
    if (file) {
      // 파일 업로드 처리 로직 추가
      console.log('파일 업로드됨:', file);
      // 파일 업로드가 완료되면 파일 객체를 저장합니다.
      setFile(file);
      localStorage.setItem("fileUrl", URL.createObjectURL(file));
    }
  
    // 변경된 이름과 이메일을 저장합니다.
    setName(name);
    localStorage.setItem("name", name);
    setEmail(email);
    localStorage.setItem("email", email);

  
    // 수정 모드를 종료합니다.
    setIsEditMode(false);
  };

 

  const handleNameChange = (event) => {
    setName(event.target.value);
    
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Wrapper>
      {isEditMode ? (
        // 수정 모드에서는 Dropzone을 보여줍니다.
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {file ? (
                <Avatar src={URL.createObjectURL(file)} alt="프로필 이미지" />
              ) : (
                <Avatar src={defaultprofile} alt="프로필 이미지" />
              )}
            </div>
          )}
        </Dropzone>
      ) : (
        // 일반 모드에서는 이미지를 보여줍니다.
        <Avatar src={fileUrl ? fileUrl : defaultprofile} alt="프로필 이미지" />

      )}

      <ProfileInfo>
        {isEditMode ? (
          // 수정 모드에서는 이름 및 이메일을 변경할 수 있는 폼을 보여줍니다.
          <FormWrapper>
          <label>
            이름:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            이메일:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <div>
          <button onClick={handleSaveClick}>저장</button>
          <button onClick={handleCancelClick}>취소</button>
          </div>
        </FormWrapper>
        ) : (
            // 일반 모드에서는 이름과 이메일을 보여줍니다.
            <>
              <Name>{name}</Name>
              <Email>{email}</Email>
              <Button onClick={handleEditClick}>수정</Button>
            </>
          )}
        </ProfileInfo>
    </Wrapper>
  );
};
export default Profile;

