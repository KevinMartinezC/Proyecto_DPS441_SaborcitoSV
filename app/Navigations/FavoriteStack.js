import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="favorites"
                component={Favorites}
                options={{title:"Favoritos"}}/>
        </Stack.Navigator>
    );
}