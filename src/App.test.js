import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import dayjs from 'dayjs';

function lastDay(year, month) {
  return new Date(year, month, 0).getDate();
}
export function App() {
  const [날짜, 날짜세팅] = useState(new Date());
  const [이미지정보, 이미지정보세팅] = useState(null);
  const getImageInfo = async (date) => {
    const 반응 = await axios.get('https://api.nasa.gov/planetary/apod', {
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
    setDate(date);
    setImageInfo(response.data);
  };

  useEffect(() => {
    getImageInfo(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const yesterday = () => {
    //2019 6 1
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    if (day > 1) {
      return getImageInfo(new Date(`${year}-${month + 1}-${day - 1}`));
    }

    if (month > 0) {
      return getImageInfo(new Date(`${year}-${month}-${lastDay(year, month)}`));
    }

    getImageInfo(new Date(`${year - 1}-${12}-${31}`));
  };

  const 내일 = () => {
    const dayjsDate = dayjs(date);
    getImageInfo(dayjsDate.add(1, 'day').toDate());
  };

  return (
    <RootDiv>
      <button onClick={yesterday}>어제의 사진 보기</button>
      {imageInfo !== null &&
        (imageInfo.media_type === 'image' ? (
          <img height="80%" src={imageInfo.url} alt="example" />
        ) : (
          <iframe title={imageInfo.title} height="50%" src={imageInfo.url} />
        ))}

      <button onClick={내일}>내일의 사진 보기</button>
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
