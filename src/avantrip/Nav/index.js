import React from 'react';
import PropTypes from 'prop-types';

import {NavList, Item, LinkNav, LinkText, LinkContainer} from './container.styled';
import Link from '../Link';
import Text from '../Text';
import Icon from '../Icon';

const getCurrentPage = (pathname) =>{
  let currentPage;
  switch (pathname) {
    case "/hoteles/":
      currentPage = "hoteles";
      break;
    case "/vuelos/":
    default:
      currentPage = "vuelos";
  }
  return currentPage;
}

const Nav = ({currentPathname, children}) => {
  let currentPage = getCurrentPage(currentPathname);
  return (
    <NavList>
      <Item>
        <LinkNav isActive={currentPage == 'vuelos'}>
          <LinkContainer href="http://www.avantrip.com/vuelos/">
            <Icon id='Vuelos' height='18px' />
            <LinkText color='primary' type='s'>
              Vuelos
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'hoteles'}>
          <LinkContainer href="http://www.avantrip.com/hoteles/">
            {/* <Icon id='Hoteles' height='18px' /> */}
            <LinkText color='primary' type='s'>
              Hoteles
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'paquetes'}>
          <LinkContainer href="http://www.avantrip.com/paquetes/">
            <Icon id='Paquetes' height='14px' />
            <LinkText color='primary' type='s'>
              Paquetes
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'autos'}>
          <LinkContainer href="http://www.avantrip.com/autos/">
          <Icon id='Autos' height='18px' />
            <LinkText color='primary' type='s'>
              Autos
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'pases'}>
          <LinkContainer href="http://pasesdisney.avantrip.com/">
            <Icon id='PasesDisney' height='15px' />
            <LinkText color='primary' type='s'>
              Pases Disney
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'cruceros'}>
          <LinkContainer href="http://www.avantrip.com/cruceros/">
            <Icon id='Cruceros' height='18px' />
            <LinkText color='primary' type='s'>
              Cruceros
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'seguros'}>
          <LinkContainer href="http://www.avantrip.com/asistencia-al-viajero/">
            {/* <Icon id='Seguros' height='18px' /> */}
            <LinkText color='primary' type='s'>
              Seguros
            </LinkText>
          </LinkContainer>
        </LinkNav>
      </Item>
    </NavList>
  );
}

Nav.propTypes = {
  currentPathname: PropTypes.string.isRequired
}

export default Nav;
