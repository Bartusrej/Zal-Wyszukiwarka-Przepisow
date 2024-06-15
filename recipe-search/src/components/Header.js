import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #ffcc80;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Wyszukiwarka Przepisów</h1>
  </HeaderContainer>
);

export default Header;
