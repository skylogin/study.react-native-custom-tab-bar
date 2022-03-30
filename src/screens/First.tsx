 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 const First = () => {
   return (
    <View style={styles.sectionContainer}>
      <Text>
        First
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
 
 export default First;
 