import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Header } from './components/header';
import styled from 'styled-components';

export function App() {
  const [imageInfo, setImageInfo] = useState(null);

  const getImageInfo = async () => {
    const response = await axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=5q6uswo7lQPq6HcC05xDRdcoikRkPCVdIqk6mbxe&date=2000-03-23'
    );
    setImageInfo(response.data);
  };

  useEffect(() => {
    getImageInfo();
  }, []);

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
