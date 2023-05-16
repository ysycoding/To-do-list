import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

const Wrapper = styled.main`
  background-color: white;
  flex-grow: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  & .react-calendar__tile {
    padding: 0.5rem 1rem;
    height: 60px;
    &:hover, &:active {
      background-color: #f5f5f5;
    }
  }
  & .react-calendar__tile--active {
    background-color: #2188ff;
    color: #fff;
    &:hover, &:active {
      background-color: #006fe6;
    }
  }
  & .react-calendar__tile--now {
    background-color: #e4e4e4;
  }
  & .react-calendar__tile--hasActive {
    background-color: #e4e4e4;
  }
`;

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (value) => {
    setDate(value);
  };

  return (
    <Wrapper>
      <h2>달력</h2>
      <StyledCalendar
        onChange={onChange}
        value={date}
      />
    </Wrapper>
  );
};

export default MyCalendar;

