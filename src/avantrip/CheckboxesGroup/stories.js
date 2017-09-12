import React from 'react';
import CheckboxesGroup from './';
import _ from 'lodash';

import withReadme from 'storybook-readme/with-readme';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withState, compose } from 'recompose';

import { ThemeProvider } from 'styled-components';

import theme from '../styled.theme';
import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
let initialOptions = [{
  value: 1,
  label: "Todos los horarios"
},
{
    value: 2,
    label: "8hs a 12hs"
}];

const enhace = withState('values','selectOption',[]);
const CheckboxesGroupWithState =  enhace((props) => {
  const { selectOption, values } = props;

  const onChangeHandler = (changedObj) => {
    action('onChange')(changedObj);
    if(changedObj.checked){
      values.push(changedObj.value);
      selectOption(values);
    }else{
      selectOption(_.remove(values, currentValue =>
        currentValue != changedObj.value));
    }
  }

  return (
    <CheckboxesGroup
      options={initialOptions}
      onChange={onChangeHandler}
      label={props.children}
      values={values} />
  )
});

storiesOf('avantrip/CheckboxesGroup', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <CheckboxesGroupWithState />
    </ThemeProvider>
  )))
  .add('With a Label', addReadme(() => (
    <ThemeProvider theme={theme}>
      <CheckboxesGroupWithState>
        <label>Horarios</label>
      </CheckboxesGroupWithState>
    </ThemeProvider>
  )));
