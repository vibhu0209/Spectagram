import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePic from '../screens/CreatePic';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'CreateStory') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0fc',
        inactiveTintColor: '#808080',
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePic" component={CreatePic} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
