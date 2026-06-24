import { Ionicons } from '@expo/vector-icons/';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
     <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'indigo', 
        // headerShown:false    
     }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
          // headerShown:false,    
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          // headerShown:false, 
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Products',
          headerShown:false,    
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout