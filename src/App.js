import React from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <LogoType>
        <p>NASA PROJECT</p>
      </LogoType>
      <Container>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </Container>
    </div>
  );
}

const LogoType = styled.header`
  background: #20232a;
  padding: 8px;
  font-size: 12px;
  color: white;
`;

const Container = styled.div`
  clear: both;
`;

const Card = styled.div`
  width: 31.3%;
  background: white;
  float: left;
  margin: 5px;
`;

export default App;
