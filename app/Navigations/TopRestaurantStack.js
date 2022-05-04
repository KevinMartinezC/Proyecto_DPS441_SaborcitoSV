import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TopRestaurants from "../screens/TopRestaurants"
import { screen } from "../utils/ScreenName";

const Stack = createNativeStackNavigator();

export default function TopRestaurantStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                 name={screen.ranking.ranking}
                component={TopRestaurants}
                options={{title:"Top 5"}}/>
        </Stack.Navigator>
    );
}