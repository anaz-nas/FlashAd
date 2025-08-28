/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import Notification from '../Screens/Notification/Notification';
import Market from '../Screens/Market/Market';

import {
  HomeActive,
  HomeInactive,
  MarketActive,
  MarketInActive,
  Add,
  NotificationActive,
  NotificationInactive,
  ProfileActive,
  ProfileInactive,
} from '../Assets/svg';
import LoginScreen from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import GetStarted from '../Screens/Auth/GetStarted';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import EmailVerification from '../Screens/Auth/EmailVerification';
import TermsOfUse from '../Screens/Auth/TermsOfUse';
import PrivacyPolicy from '../Screens/Auth/PrivacyPolicy';
import ResetPassword from '../Screens/Auth/ResetPassword';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomAddButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={styles.addIconOnly}
  >
    <Add width={60} height={60} />
  </TouchableOpacity>
);

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#BA181B',
        tabBarInactiveTintColor: '#8E8E8E',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return focused ? (
                <HomeActive width={24} height={24} />
              ) : (
                <HomeInactive width={24} height={24} />
              );
            case 'Market':
              return focused ? (
                <MarketActive width={24} height={24} />
              ) : (
                <MarketInActive width={24} height={24} />
              );
            case 'Notification':
              return focused ? (
                <NotificationActive width={24} height={24} />
              ) : (
                <NotificationInactive width={24} height={24} />
              );
            case 'Profile':
              return focused ? (
                <ProfileActive width={24} height={24} />
              ) : (
                <ProfileInactive width={24} height={24} />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />

      <Tab.Screen
        name="Add"
        component={View}
        options={{
          tabBarButton: props => (
            <CustomAddButton
              {...props}
              onPress={() => console.log('Add pressed')}
            />
          ),
        }}
      />

      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  addIconOnly: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
});
