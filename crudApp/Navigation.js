import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile'

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'green',fontWeight:'bold', fontSize:20}}>Hello I am Engineer Zidan. I am passionate about Ai and Software Development</Text>
    </View>
  );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#282c34', // Change background color of the drawer
        },
        headerStyle: {
          backgroundColor: '#db8feb', // Change background color of the header
        },
        headerTintColor: 'blue', // Change color of the header text
        drawerLabelStyle: {
          color: '#ffff', // Change text color in the drawer
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Profile}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="About"
        component={Notifications}
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}