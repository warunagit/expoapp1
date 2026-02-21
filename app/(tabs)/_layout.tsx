import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor:"#333",
            headerStyle:{
              backgroundColor:"#25292e",
            },
            headerShadowVisible:false,
            headerTintColor:"#fff",
            tabBarStyle:{
              backgroundColor:"#25292e",
            },
        }}
    >
      <Tabs.Screen name="index" options={{
        headerTitle: "Home",
        tabBarIcon: ({focused, color}) => (
            <Ionicons
                name={focused ? "home-sharp" : "home-outline"} 
                size={30}
                color={color}/>
        )
      }} />
      <Tabs.Screen name="about" options={{
        headerTitle: "About",
        tabBarIcon: ({focused, color}) => (
            <Ionicons
                name={focused ? "information-circle" : "information-circle"} 
                size={30}
                color={color}/>
        )
      }} />
      <Tabs.Screen name="not-found" options={{
        headerShown: false,
      }}/>
    </Tabs>
  );
}
