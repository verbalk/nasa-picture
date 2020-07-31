import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

function lastDay(year, month) {
  return new Date(year, month, 0).getDate();
}
export function App() {
  const [date, setDate] = useState(new Date());
  const [imageInfo, setImageInfo] = useState(null);
  const getImageInfo = async () => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: '5q6uswo7lQPq6HcC05xDRdcoikRkPCVdIqk6mbxe',
        // date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        date:
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate(),
      },
    });
    setImageInfo(response.data);
  };
  useEffect(() => {
    getImageInfo();
  }, [date]);

  const yesterday = () => {
    //2019 6 1
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    if (day > 1) {
      return setDate(new Date(`${year}-${month + 1}-${day - 1}`));
    }
    if (month > 0) {
      return setDate(new Date(`${year}-${month}-${lastDay(year, month)}`));
    }
    return setDate(new Date(`${year - 1}-${12}-${31}`));
  };

  const tomorrow = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    if (day > 1) {
      return setDate(new Date(`${year}-${month + 1}-${day + 1}`));
    }
    if (month > 0) {
      return setDate(new Date(`${year}-${month}-${lastDay(year, month)}`));
    }
    return setDate(new Date(`${year + 1}-${12}-${31}`));
  };

  return (
    <RootDiv>
      <button onClick={yesterday}>어제의 사진 보기</button>
      {imageInfo && <img height="80%" src={imageInfo.url} alt="example" />}
      <button onClick={tomorrow}>내일의 사진 보기</button>
    </RootDiv>
  );
}
const RootDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
