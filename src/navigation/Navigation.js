import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoritesScreen from '../screens/Favorites'
import AccountScreen from '../screens/Account'
import PokedexScreen from '../screens/Pokedex'

const Tab= createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ 
          tabBarLabel: "Favoritos", 
          tabBarIcon: ({color, size}) => (
          <Icon name='heart' color={color} size={size}/>
          )}} />
       
        <Tab.Screen name="Pokedex" component={PokedexScreen} options={{ 
          tabBarLabel: "", 
          tabBarIcon: () => renderPokeball()}} />
         

        <Tab.Screen name="Account" component={AccountScreen} options={{ 
          tabBarLabel: "Mi Cuenta", 
          tabBarIcon: ({color, size}) => (
          <Icon name='user' color={color} size={size}/>
          )}} />
    </Tab.Navigator>
  )
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/ball.png")}
      style={{ width: 40, height: 40, bottom: -6 }}
    />
  );
}