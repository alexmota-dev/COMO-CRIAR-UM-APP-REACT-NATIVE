import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

function MainStack(): React.JSX.Element {
  
    return (
        <Stack.Navigator
          initialRouteName="Preload"
          screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIN" component={SignIn} />
            <Stack.Screen name="SignUP" component={SignUp} />
        </Stack.Navigator>
    );
  }

  export default MainStack;