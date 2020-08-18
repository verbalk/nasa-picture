import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function lastDay(year, month) {
  return new Date(year, month, 0).getDate();
}
export function App() {
  const [date, setDate] = useState(new Date());
  const [imageInfo, setImageInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getImageInfo = async (date) => {
    setIsLoading(true);
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
    setIsLoading(false);
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
      <MoveButton onClick={yesterday}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </MoveButton>
      <PolaRoid>
        {imageInfo !== null &&
          (imageInfo.media_type === 'image' ? (
            <img width="100%" src={imageInfo.url} alt="example" />
          ) : (
            <iframe title={imageInfo.title} height="50%" src={imageInfo.url} />
          ))}
        <Container>
          <p>{imageInfo && imageInfo.title}</p>
        </Container>
      </PolaRoid>
      {isLoading && '로딩중이야'}
      <MoveButton onClick={내일}>
        <FontAwesomeIcon icon={faAngleRight} />
      </MoveButton>
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

const MoveButton = styled.button`
  border: 1px solid #465acb;
  padding: 12px 20px;
  background: #d9d9ff;
  color: #465acb;
  border-radius: 4px;
  font-size: 32px;
`;

const PolaRoid = styled.div`
  width: 25%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
`;
const Container = styled.div`
  text-align: center;
  padding: 24px 20px;
`;
