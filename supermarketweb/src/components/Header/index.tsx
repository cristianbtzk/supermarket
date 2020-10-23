import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/logo.png';
import { Container, Content, Search, Contact } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Supermarket" />
        <Search>
          <input type="text" placeholder="Pesquise algum produto" />
        </Search>
        <Contact>
          <FaWhatsapp />
          <div>
            <strong>Fale Conosco</strong>
            <p>47 98888 8888</p>
          </div>
        </Contact>
      </Content>
    </Container>
  );
};

export default Header;
