import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Splash from "../screens/splash"
import LogIn from "../screens/logIn"
import SignUp from "../screens/signUp"
import OnBoarding from "../screens/onBoarding"
import RegisterSignup from "../screens/registerSignup"
import RegisterDone from "../screens/registerDone"
import AccountSetting from "../screens/accountSetting"
import Terms from "../screens/terms"
import PrivacyPolicy from "../screens/privacyPolicy"
import WellNess from "../screens/wellNess"
import Home from "../screens/home"

const Stack = createStackNavigator()

const AuthStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        initialParams={{ auth: props }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        initialParams={{ auth: props }}
      />
      <Stack.Screen
        name="RegisterSignup"
        component={RegisterSignup}
        initialParams={{ auth: props }}
      />
      <Stack.Screen
        name="RegisterDone"
        component={RegisterDone}
        initialParams={{ auth: props }}
      />
      <Stack.Screen
        name="Login"
        component={LogIn}
        initialParams={{ auth: props }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        initialParams={{ auth: props }}
      />
      {/* <Stack.Screen name="AccountSetting" component={AccountSetting} /> */}
      {/* <Stack.Screen name="Terms" component={Terms} /> */}
      {/* <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}
      {/* <Stack.Screen name="WellNess" component={WellNess} /> */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  )
}

export default AuthStack
