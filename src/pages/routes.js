import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Details from './Details';

const Stack = createStackNavigator();

class Routes extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6a3cc0',
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name="details"
          component={Details}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6a3cc0',
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default Routes;
