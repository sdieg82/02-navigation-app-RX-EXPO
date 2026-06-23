import { products } from '@/app/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


const ProductScreen = () => {
const {id}=useLocalSearchParams();


 const product=products.find((item)=>item.id==id)
 
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