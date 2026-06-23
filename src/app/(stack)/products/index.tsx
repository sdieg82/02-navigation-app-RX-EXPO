import { products } from '@/app/store/products.store'
import { Link } from 'expo-router'
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
            <Text style={style.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            
            <View style={style.cardFooter}>
              <Text>{item.price}</Text>
              <Link
              href={`/products/${item.id}`}  
              >Ver detalles
              </Link>
            </View>
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
    backgroundColor:"",
  },
  title:{
    fontSize:20,
    fontWeight:'900',
    marginBottom:10
  },
  cardFooter:{
     flex:1,
     marginTop:10,
     flexDirection:'row',
     justifyContent:'space-between'
  }
})