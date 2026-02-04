import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { MediaScrollScreen } from "../screens/MediaScrollScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { TabOneScreen } from "../screens/TabOneScreen";
import { features } from "../config/features";

type TabsParamList = {
  Main: undefined;
  TabOne: undefined;
  Media: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export function TabbedRoot() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={HomeScreen}
          options={{ title: "Main" }}
        />
        <Tab.Screen
          name="TabOne"
          component={TabOneScreen}
          options={{ title: "Tab 1" }}
        />
        {features.enableMediaScreen ? (
          <Tab.Screen
            name="Media"
            component={MediaScrollScreen}
            options={{
              title: "Media Scroll",
              headerShown: false,
              tabBarStyle: { display: "none" },
            }}
          />
        ) : null}
        {features.enableProfileScreen ? (
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "Profile" }}
          />
        ) : null}
        {features.enableSettingsScreen ? (
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Settings" }}
          />
        ) : null}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
