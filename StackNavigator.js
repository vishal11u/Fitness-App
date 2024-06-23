import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home_Screen";
import WorkOutScreen from "./src/screens/WorkOutScreen";
import FitScreen from "./src/screens/FitScreen";
import RestScreen from "./src/screens/RestScreen";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Workout" component={WorkOutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;