import React from 'react';
import Nav from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';


storiesOf('global/styled@Nav', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Nav currentPathname="/vuelos/" />
  ))
  .add('Con currentPathname igual a /hoteles/', () => (
    <Nav currentPathname="/hoteles/" />
  ))