import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Iorgen Wildrik</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}

      {/* <ProfilePage /> */}
    </Container>
  );
};

export default Layout;
