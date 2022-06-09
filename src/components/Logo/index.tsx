import React from 'react';
import { View, Image, StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      paddingTop: 50,
      },
    logo: {
        flex: 1,
        width: 250,
        height: 150,
        resizeMode: 'contain',
    },
  });

const Logo = () => {
    return(
    <View style={styles.container}>
        <Image  
            style={styles.logo}
            source={require('@components/Logo/logo-diversa-branco.png')}
      />

</View>
    )

}; 

export default Logo