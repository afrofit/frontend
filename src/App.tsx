import * as React from 'react';
import { Text } from 'react-native';
import { Page } from './components/Page/Page';

export const App: React.FC = () => {
  return (
    <Page padding={20} onPress={() => console.log('Press that!')}>
      <Text>What's this!</Text>
    </Page>
  );
};
