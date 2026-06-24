import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeLayout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Link href={"/tabs/profile"} asChild>
                    <CustomButton
                        style={styles.spacer}
                        color="First"
                    >
                        Perfil
                    </CustomButton>
                </Link>
                <Link href={"/tabs/(stack)/products"} asChild>
                    <CustomButton
                        style={styles.spacer}
                        color="Secondary"
                    >
                        Productos
                    </CustomButton>
                </Link>
                <Link href={"/tabs/settings"} asChild>
                    <CustomButton
                        style={styles.spacer}
                        color="Tertiary"
                    >
                        Ajustes
                    </CustomButton>
                </Link>

            </View>
        </SafeAreaView>
    )
}

export default HomeLayout

const styles = StyleSheet.create({
    spacer: {
        marginBottom: 10,
        backgroundColor: "blue",
        borderRadius: 10,
        color: "white"
    },
    container: {
        flex: 1
    }
})