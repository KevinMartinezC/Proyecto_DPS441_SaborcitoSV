import * as React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default function UserGuest() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require('../../../assets/img/cuenta.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de SoborcitoSV</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de forma sencilla, vota cual te ha gustado más y comenta
        como ha sido tu experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => console.log('click')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 40,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  btnStyle: {
    backgroundColor: '#FC370C',
  },
  btnContainer: {
    width: '70%',
  },
  viewBtn: {
    flex: 1,
    alignItems: 'center',
  },
});
