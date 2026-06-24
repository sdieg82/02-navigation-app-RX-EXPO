import { Redirect } from 'expo-router'
import { StyleSheet } from 'react-native'

const App = () => {
  return (
    // <SafeAreaProvider>
    // <View style={styles.container}>
    //   {/* <Text style={styles.text}>Hola mundo</Text>
    //   <Link href={"/products"}> Productos</Link>
    //   <Link href={"/home"}> Home</Link> */}
    // </View>
    // </SafeAreaProvider>
    //  <Redirect href={"/home"}/>
     <Redirect href={"/tabs"}/>
  )
}

export default App

//crear estilos con stylsheet
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20
  },
  text:{
    fontSize:24
  }
})