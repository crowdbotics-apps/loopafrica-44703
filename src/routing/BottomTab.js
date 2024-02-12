import React from "react"
import { Image } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useNavigationState } from "@react-navigation/native"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/size"
import {
  PROFILE_ACTIVE,
  PROFILE_IN_ACTIVE,
  CONSULT_ACTIVE,
  CONSULT_IN_ACTIVE,
  HOME_ACTIVE,
  HOME_IN_ACTIVE,
  PHARMACY_ACTIVE,
  PHARMACY_IN_ACTIVE,
  WELLNESS_ACTIVE,
  WELLNESS_IN_ACTIVE
} from "../utils/images"

import Profile from "../screens/profile"
import Consult from "../screens/consult"
import Home from "../screens/home"
import Pharmacy from "../screens/pharmacy"
import WellNess from "../screens/wellNess"

import AccountSetting from "../screens/accountSetting"
import Terms from "../screens/terms"
import PrivacyPolicy from "../screens/privacyPolicy"
import TelehealthAppointment from "../screens/telehealthAppointment"
import GroupTelehealthSession from "../screens/groupTelehealthSession"
import Welcome from "../screens/welcome"
import Notification from "../screens/notification"
import PeopleSession from "../screens/peopleSession"
import ContactUs from "../screens/contactUs"
import SupportFeedback from "../screens/supportFeedback"
import ChangePassword from "../screens/changePassword"

import Colors from "../utils/colors"

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8"
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false
}

const ProfileStackNavigator = ({ navigation, route }) => {
  const param = useNavigationState(state => state)
  if (param.routes[0] && param.routes[0].state === undefined) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else if (
    param.routes[0].state !== undefined &&
    param.routes[0].state.index === 0
  ) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else {
    navigation && navigation.setOptions({ tabBarStyle: { display: "none" } })
  }
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ auth: route?.params?.auth }}
      />
    </Stack.Navigator>
  )
}

const ConsultStackNavigator = ({ navigation, route }) => {
  const param = useNavigationState(state => state)
  if (param.routes[1] && param.routes[1].state === undefined) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else if (
    param.routes[1].state !== undefined &&
    param.routes[1].state.index === 0
  ) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else {
    navigation && navigation.setOptions({ tabBarStyle: { display: "none" } })
  }
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Consult"
        component={Consult}
        initialParams={{ auth: route?.params?.auth }}
      />
    </Stack.Navigator>
  )
}

const HomeStackNavigator = ({ navigation, route }) => {
  const param = useNavigationState(state => state)
  if (param.routes[2] && param.routes[2].state === undefined) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else if (
    param.routes[2].state !== undefined &&
    param.routes[2].state.index === 0
  ) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else {
    navigation && navigation.setOptions({ tabBarStyle: { display: "none" } })
  }
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSetting}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="TelehealthAppointment"
        component={TelehealthAppointment}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="GroupTelehealthSession"
        component={GroupTelehealthSession}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        initialParams={{ auth: route?.params?.auth }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        initialParams={{ auth: route?.params?.auth }}
      />

      <Stack.Screen
        name="PeopleSession"
        component={PeopleSession}
        initialParams={{ auth: route?.params?.auth }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        initialParams={{ auth: route?.params?.auth }}
      />

      <Stack.Screen
        name="SupportFeedback"
        component={SupportFeedback}
        initialParams={{ auth: route?.params?.auth }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        initialParams={{ auth: route?.params?.auth }}
      />
    </Stack.Navigator>
  )
}

const PharmacyStackNavigator = ({ navigation, route }) => {
  const param = useNavigationState(state => state)
  if (param.routes[3] && param.routes[3].state === undefined) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else if (
    param.routes[3].state !== undefined &&
    param.routes[3].state.index === 0
  ) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else {
    navigation && navigation.setOptions({ tabBarStyle: { display: "none" } })
  }
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Pharmacy"
        component={Pharmacy}
        initialParams={{ auth: route?.params?.auth }}
      />
    </Stack.Navigator>
  )
}

const WellnessStackNavigator = ({ navigation, route }) => {
  const param = useNavigationState(state => state)
  if (param.routes[4] && param.routes[4].state === undefined) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else if (
    param.routes[4].state !== undefined &&
    param.routes[4].state.index === 0
  ) {
    navigation &&
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "relative",
          top: 0,
          height: SCREEN_HEIGHT / 13
        }
      })
  } else {
    navigation && navigation.setOptions({ tabBarStyle: { display: "none" } })
  }
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="WellNess"
        component={WellNess}
        initialParams={{ auth: route?.params?.auth }}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const BottomTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: SCREEN_WIDTH / 17.15 - 10,
          fontFamily: "Poppins-Medium"
        },
        tabBarItemStyle: {
          backgroundColor: "#000066",
          paddingBottom: 5
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        initialParams={{ auth: props }}
        options={({ route }) => {
          return {
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? PROFILE_IN_ACTIVE : PROFILE_ACTIVE}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Consult"
        component={ConsultStackNavigator}
        initialParams={{ auth: props }}
        options={({ route }) => {
          return {
            tabBarLabel: "Consult",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? CONSULT_IN_ACTIVE : CONSULT_ACTIVE}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        initialParams={{ auth: props }}
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HOME_IN_ACTIVE : HOME_ACTIVE}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          )
        })}
      />
      <Tab.Screen
        name="Pharmacy"
        component={PharmacyStackNavigator}
        initialParams={{ auth: props }}
        options={({ route }) => {
          return {
            tabBarLabel: "Pharmacy",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? PHARMACY_IN_ACTIVE : PHARMACY_ACTIVE}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="WellNess"
        component={WellnessStackNavigator}
        initialParams={{ auth: props }}
        options={({ route }) => {
          return {
            tabBarLabel: "WellNess",
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? WELLNESS_IN_ACTIVE : WELLNESS_ACTIVE}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
