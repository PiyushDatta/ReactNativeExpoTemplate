import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { TabOneScreen } from "../screens/TabOneScreen";

type TabsParamList = {
  Main: undefined;
  TabOne: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export function TabbedRoot() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={HomeScreen} options={{ title: "Main" }} />
        <Tab.Screen name="TabOne" component={TabOneScreen} options={{ title: "Tab 1" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
