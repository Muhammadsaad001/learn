import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="#888888" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="search" size={24} color="#888888" />
        <Text style={styles.iconText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="shopping-cart" size={24} color="#888888" />
        <Text style={styles.iconText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="person" size={24} color="#888888" />
        <Text style={styles.iconText}>Account</Text>
      </TouchableOpacity>
       <TouchableOpacity  style={styles.iconContainer}>
      
      <Ionicons name="heart" size={24} color="red" />
      <Text style={styles.iconText}>reviews</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ios-add-circle" size={24} color="blue" />
      <Text style={styles.iconText}>add</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ios-settings" size={24} color="gray" />
      <Text style={styles.iconText}>settings</Text>
    </TouchableOpacity>
     <TouchableOpacity  style={styles.iconContainer}>
      
      <Ionicons name="ios-add-square" size={24} color="red" />
      <Text style={styles.iconText}>reviews</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    marginTop: 4,
    color: '#888888',
  },
});

export default Footer;