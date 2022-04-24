import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants/Restaurants";
import AddRestaurant from '../screens/Restaurants/AddRestaurant'
import Restaurant from "../screens/Restaurants/Restaurant";
import AddReviewRestaurants from "../screens/Restaurants/AddReviewRestaurants";

const Stack = createNativeStackNavigator();

export default function RestaurantStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="restaurants"
                component={Restaurants}
                options={{title:"Restaurantes"}}/>
            <Stack.Screen
                name="add-restaurant"
                component={AddRestaurant}
                options={{title:"Añadir nuevo restaurante"}}
            />
            <Stack.Screen
                name="restaurant"
                component={Restaurant}
            />
            <Stack.Screen
            name="add-review-restaurant"
            component={AddReviewRestaurants}
            options={{title:"Nuevo comentario"}}
            />
        </Stack.Navigator>
    );
}