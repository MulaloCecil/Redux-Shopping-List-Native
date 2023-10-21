import React from 'react';
import { Provider } from 'react-redux';
import store from './components/server/store'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/Front-End/LandingPage';
import ShoppingList from './components/Front-End/ShoppingList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShoppingList"
            component={ShoppingList}
            options={{ title: 'Shopping List' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;