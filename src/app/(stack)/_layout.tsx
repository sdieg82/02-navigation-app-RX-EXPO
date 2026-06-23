import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen
        name='home'
        options={{
            title:"Home Screen"
        }}
        />
        <Stack.Screen
        name='products/index'
        options={{
            title:"Products Screen"
        }}
        />
        <Stack.Screen
        name='settings'
        options={{
            title:"Settings Screen"
        }}
        />
        <Stack.Screen
        name='profile'
        options={{
            title:"Profile Screen"
        }}
        />

    </Stack>
  )
}

export default StackLayout