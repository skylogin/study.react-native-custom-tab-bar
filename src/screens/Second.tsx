 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 const Second = () => {
   return (
    <View style={styles.sectionContainer}>
      <Text>
        Second
      </Text>
    </View>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
 });
 
 export default Second;
 