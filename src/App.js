import React from 'react';
import './App.css';
import { Header } from './components/header';
import styled from 'styled-components';

export function App() {
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
