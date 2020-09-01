import React from 'react';
import { storiesOf } from '@storybook/react-native'
import { GetStarted, Launch, SignIn, Example } from '../Screen';

storiesOf('All Screen', module)
  .add('GetStarted Screen', () => <GetStarted />)
  .add('Launch Screen', () => <Launch />)
  .add('SignIn Screen', () => <SignIn />)
  .add('Example Screen', () => <Example />)