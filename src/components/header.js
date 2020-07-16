import React from 'react';
import styled from 'styled-components';

export function Header() {
  return (
    <LogoType>
      <p>NASA PROJECT</p>
    </LogoType>
  );
}

const LogoType = styled.header`
  background: #20232a;
  padding: 8px;
  font-size: 12px;
  color: white;
`;
