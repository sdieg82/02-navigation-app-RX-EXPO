import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ProductScreen = () => {
const {id}=useLocalSearchParams();
const product=products.find((item)=>item.id==id)
const navigation=useNavigation()

useEffect(() => {
  navigation.setOptions({
    title:product?.title ?? 'Producto'
  })
}, [product])



 if(!product){
   return  <Redirect href="/"/>
 }

return (
    <View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </View>
  )
}

export default ProductScreen

const styles=StyleSheet.create({
    cardProduct:{

    }
})