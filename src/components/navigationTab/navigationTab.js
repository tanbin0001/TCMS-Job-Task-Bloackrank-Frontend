import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import CreateTour from "../../screens/Tour/CreateTour";
import AllTours from "../../screens/Tour/AllTours";
import Icons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const navigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="create" color={color} size={size} />
          ),
        }}
        name="Create Tour"
        component={CreateTour}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="list" color={color} size={size} />
          ),
        }}
        name="All Tours"
        component={AllTours}
      />
      {/* <Tab.Screen name="Register" component={RegisterScreen} /> */}
    </Tab.Navigator>
  );
};

export default navigationTab;
