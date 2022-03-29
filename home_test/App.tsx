import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import MainNavigation from './src/navigation/MainNavigation';
const Stack = createNativeStackNavigator<TypeNavigation>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
          initialRouteName='MainNavigation'
        >
          <Stack.Screen component={MainNavigation} name='MainNavigation' />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;;
