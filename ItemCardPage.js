import React from 'react';
import { View, Text } from 'react-native';

const ItemCardPage = ({ route }) => {
  const { items } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,marginTop:100}}>
      <Text>Item Card Page</Text>
      {items.map((item, index) => (
        <View key={index} style={{ marginTop: 100 }}>
          <Text>{item}</Text>
          <Text>Price: $X.XX</Text> 
        </View>
      ))}
    </View>
  );
};

export default ItemCardPage;
