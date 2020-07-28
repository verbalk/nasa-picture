import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Header } from './components/header';
import styled from 'styled-components';

export function App() {
  const [date, setDate] = useState(new Date());
  const [imageInfo, setImageInfo] = useState(null);
  // ?부터 시작 변경되는 부분임 getFullYear / getMonth / getDate new Date('2020-07-23')
  // year, month, 0 이면 마지막 0 은 날짜 1이 없으므로 전날로 감 ㅜㄷ

  const getImageInfo = async () => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: 'api_key=5q6uswo7lQPq6HcC05xDRdcoikRkPCVdIqk6mbxe&date',
        date: '2000-03-24',
      },
    });
    setImageInfo(response.data);
  };

  useEffect(() => {
    getImageInfo();
  }, []); // []는 값이 없어서 댑스가 한번만 돌아감

  return (
    <RootDiv>
      <button>어제의 사진 보기</button>
      {imageInfo && <img src={imageInfo.url} />}
      <button>내일의 사진 보기</button>
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
