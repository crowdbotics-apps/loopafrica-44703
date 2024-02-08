import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./src/routing/AuthStack"
import { Platform, SafeAreaView, StatusBar } from "react-native"
import Colors from "./src/utils/colors"
import Toast from "react-native-toast-message"
import { toastConfig } from "./src/components/toastConfig"
import BottomTabNavigator from "./src/routing/BottomTab"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Provider } from "react-redux"

const App = () => {
  const [loogedIn, setLoggedIn] = React.useState(false)

  const signOut = () => {
    AsyncStorage.clear()
    setLoggedIn(!loogedIn)
  }

  const signIn = () => {
    // AsyncStorage.clear();
    setLoggedIn(!loogedIn)
  }

  return (
    <Provider>
      <StatusBar animated={true} barStyle={"dark-content"} />
      {Platform.OS === "ios" ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: !loogedIn ? Colors.appThemeColor : "#01E5C0" }}>
          {!loogedIn ? (
            <NavigationContainer>
              <AuthStack  signIn={signIn} />
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <BottomTabNavigator signOut={signOut} />
            </NavigationContainer>
          )}
        </SafeAreaView>
      ) : !loogedIn ? (
        <NavigationContainer>
          <AuthStack signIn={signIn} />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <BottomTabNavigator signOut={signOut} />
        </NavigationContainer>
      )}
      <Toast config={toastConfig} position="bottom" autoHide={true} />
    </Provider>
  )
}

export default App
