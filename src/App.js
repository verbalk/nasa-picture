import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Header } from './components/header';
import styled from 'styled-components';

export function App() {
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=RAgi4NFaaCnMPmtH9axvbxuKxPlUw12mM4qiPL0e'
      )
      .then((e) => {
        setImages(e.data.photos);
        console.log(e);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
      </Container>
    </div>
  );
}

const Container = styled.ul`
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const Card = styled.li`
  background: tomato;
  padding: 5px;
  width: 100px;
  height: 100px;
  margin: 10px;
  color: white;
`;
