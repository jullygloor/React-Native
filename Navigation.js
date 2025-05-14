import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import AccountSettingsScreen from './screens/AccountSettingsScreen';
import EditProfileScreen from './screens/EditProfileScreen';



const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Cadastro" component={AboutScreen} />
        <Drawer.Screen name="login" component={LoginScreen} />
        <Drawer.Screen name="Conta" component={AccountSettingsScreen} />
        <Drawer.Screen name="Editar" component={EditProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;