import React from 'react';
import axios from 'axios';

import {
  Text, 
  View,
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  TouchableOpacity,
  } from 'react-native';
import { Post } from '../components/post';

 




export const HomeScreen =({navigation}) =>{
  const [isLoading,setIsLoading] = React.useState(true);
  const [items,setItems] = React.useState();

const fetchPosts = () =>{
  setIsLoading(true);

  axios.get('https://62fb9617abd610251c0cb13d.mockapi.io/items')
  .then(({data}) =>{
    setItems(data);
  }).catch((err) =>{
    console.log(err);
    alert('Ошибка при получении данных');
  }).finally(()=>{ setIsLoading(false);});

}
  React.useEffect(fetchPosts,[]);
  

//Если загрузка  мы не рендерим разметку , если фолс- то рендерим
  if(isLoading)
  {
    return (<View style = {{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
    <ActivityIndicator size = "large" />
    <Text style = {{marginTop:15}}>Загрузка данных!!</Text>
    </View>)
  }

   //В FlatList не нужен кей в отличии от Map
  return (
    <View >
    <FlatList
    refreshControl={<RefreshControl
      
      refreshing={isLoading}
      onRefresh={fetchPosts}

    />}//Обновление данных


    data = {items}
    renderItem = {({item}) => (
      <TouchableOpacity onPress={()=> navigation.navigate('FullPost',{id:item.id,title:item.title})}>
      <Post title = {item.title} //Достаем айтемы с помощью деструктуризация  с жсона
      imageUrl ={item.imageUrl} 
      createdAt ={item.createdAt}/>
      </TouchableOpacity>
    )}    
    />
    </View>
  );
}



