import { products } from '@/app/store/products.store'
import { FlatList, StyleSheet, Text, View } from 'react-native'




const Products = () => {  
  //traerme la data con useeffect
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <View
          style={style.card}
          >
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      
      />
    </View>
  )
}

export default Products

const style=StyleSheet.create({
  card:{
    padding:5,
    margin:20,
    backgroundColor:""

  }
})