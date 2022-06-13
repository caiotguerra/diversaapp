import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    autoria: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop : 200,
   
    },
    setColorGreen : {
        color: '#a6ffcc'
      },
    
    },
    
  );

const Autoria = () => {
    return(
    <View style={styles.autoria}>
        <Text style={styles.setColorGreen}>
        Copyright © 2022 Diversa Invest
        </Text>
   </View>
    )

}; 

export default Autoria
