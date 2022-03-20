import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TopRestaurants from "../screens/TopRestaurants"

const Stack = createNativeStackNavigator();

export default function TopRestaurantStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="top-restaurants"
                component={TopRestaurants}
                options={{title:"Top 5"}}/>
        </Stack.Navigator>
    );
}