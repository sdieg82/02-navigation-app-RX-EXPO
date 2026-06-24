import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='home'
                options={{
                    title: "Home Screen",
                    animation: "ios_from_right",
                    // headerShown:false
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: "Products Screen",
                    animation: "ios_from_right",
                    // headerShown:false
                }}
            />
            <Stack.Screen
                name='settings'
                options={{
                    title: "Settings Screen",
                    animation: "ios_from_right",
                    // headerShown:false
                }}
            />
            <Stack.Screen
                name='profile'
                options={{
                    title: "Profile Screen",
                    animation: "ios_from_right",
                    // headerShown:false
                }}
            />

        </Stack>
    )
}

export default StackLayout