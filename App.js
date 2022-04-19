import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllExpenses from './screens/AllExpenses';
import RecentExepenses from './screens/RecentExepenses';
import ManageExpenses from './screens/ManageExpenses';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllExpenses" component={AllExpenses} />
      <Tab.Screen name="RecentExepenses" component={RecentExepenses} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
