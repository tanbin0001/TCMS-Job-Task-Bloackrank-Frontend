 

import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import tw from "twrnc";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import RegisterScreen from "./src/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTab from "./src/components/navigationTab/navigationTab";
 

const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>

     
    <View style={tw` flex justify-center  w-full`}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={navigationTab} />
          <Stack.Screen name="Login" component={LoginScreen} />
 
   
          <Stack.Screen name="Register" component={RegisterScreen} />
 
          </Stack.Navigator>
          {/* <RegisterScreen /> */}
        </PersistGate>
      </Provider>
    </View>
      </NavigationContainer>
  );
}
