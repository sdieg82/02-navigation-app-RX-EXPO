import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'

interface customButtonProps extends PressableProps{
    children:string,
    color?:'First' | 'Secondary' | 'Tertiary'

}

const CustomButton = ({children,onPress,color='First'}:customButtonProps) => {
  return (
    <Pressable 
    style={[styles.button,styles[color]]}
    onPress={onPress}
    >
      <Text style={{color:"white", textAlign:"center"}}>{children}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        padding:10,
        borderRadius:7,
        marginBottom:10,
    },
    First:{
        backgroundColor:"blue"
    },
    Secondary:{
        backgroundColor:"green"
    },
    Tertiary:{
        backgroundColor:"red"
    },
})