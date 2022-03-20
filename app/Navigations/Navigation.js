import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Icon} from "react-native-elements"
import RestaurantStack from "./RestaurantStack";
import FavoriteStack from "./FavoriteStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantStack from "./TopRestaurantStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarInactiveTintColor: "#646464",
                tabBarActiveTintColor: "#FC370C",
                tabBarIcon: ({color}) => screenOption(route,color)
            })}
            >
            
                <Tab.Screen name="restaurants-stack" 
                component={RestaurantStack} 
                options={{title:"Restaurantes", headerShown: false}}/>

                <Tab.Screen name="favorites-stack" 
                component={FavoriteStack} 
                options={{title:"Favoritos", headerShown: false}}/>

                <Tab.Screen name="top-restaurants-stack" 
                component={TopRestaurantStack} 
                options={{title:"Top 5", headerShown: false}}/>

                <Tab.Screen name="search-stack" 
                component={SearchStack} 
                options={{title:"Buscador", headerShown: false}}/>

                <Tab.Screen name="account-stack" 
                component={AccountStack} 
                options={{title:"Cuenta", headerShown: false}}/>    
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOption(route,color) {
    let iconName;

    switch (route.name) {
        case "restaurants-stack":
            iconName = "compass-outline";
            break;
        
        case "favorites-stack":
            iconName = "heart-outline";
            break;

        case "top-restaurants-stack":
            iconName = "star-outline";
            break;

        case "search-stack":
            iconName = "magnify";
            break;

        case "account-stack":
            iconName = "home-outline";
            break;
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    ); 
}