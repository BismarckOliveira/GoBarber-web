import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';
import logo from '../../assets/logo.svg';

const DashboardTest: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="logo" />
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/68343542?s=460&u=83673968d8696382ff401dcdb68a213a8ba03d9b&v=4"
              alt="UserImage"
            />
            <div>
              <span>Bem Vindo</span>
              <strong>Bismarck Oliveira</strong>
            </div>
          </Profile>
          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default DashboardTest;
