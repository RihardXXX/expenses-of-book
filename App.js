import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';

import AllExpenses from './screens/AllExpenses';
import RecentExepenses from './screens/RecentExepenses';
import ManageExpenses from './screens/ManageExpenses';

import IconButton from './components/ui/IconButton';

import colors from './constants/colors';

// console.log(112, colors.primary200);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={({navigation}) => ({
      headerStyle: { backgroundColor: colors.primary200 },
      headerTintColor: colors.primary800,
      tabBarStyle: { backgroundColor: colors.primary200 },
      tabBarActiveTintColor: colors.primary800,
      tabBarInactiveTintColor: colors.error50,
      headerRight: ({tintColor}) => 
        <IconButton 
          name={'add'} 
          color={tintColor} 
          size={38} 
          onPress={() => navigation.navigate('ManageExpenses')} 
        />
    })}>
      <Tab.Screen 
        name="AllExpenses" 
        component={AllExpenses} 
        options={{
          tabBarLabel: 'all',
          tabBarLabelStyle: { fontSize: 18 },
          title: 'all expenses',
          tabBarIcon: ({color, size}) => <Ionicons name="american-football" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="RecentExepenses" 
        component={RecentExepenses} 
        options={{
          tabBarLabel: 'recent',
          tabBarLabelStyle: { fontSize: 18 },
          title: 'recent expenses',
          tabBarIcon: ({color, size}) => <Ionicons name="baseball" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MyTabs" 
            component={MyTabs} 
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name="ManageExpenses" 
            component={ManageExpenses} 
            options={{
              presentation: 'card'
            }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
