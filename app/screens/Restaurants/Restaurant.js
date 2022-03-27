import React from 'react';
import {View, Text, StyleSheet} from "react-native";


export default function Restaurant(props){
  console.log(props);
    return(
        <View style={styles}>
            <Text>Restaurante Informacion</Text>
        </View>
    );
}

const styles=StyleSheet.create({});