import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '../components/App/App';
import Button from '../components/Button/Button';


storiesOf('App', module)
    .add('to Application', () => (
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    ));

storiesOf('Button', module)
    .add('with text', () => (
        <MuiThemeProvider>
            <Button onClick={action('clicked')}>
                Hello Button
            </Button>
        </MuiThemeProvider>
    ))
    .add('with some emoji', () => (
        <MuiThemeProvider>
            <Button onClick={action('clicked')}>
              <span role="img" aria-label="so cool">
                😀 😎 👍 💯
              </span>
            </Button>
        </MuiThemeProvider>
    ));
