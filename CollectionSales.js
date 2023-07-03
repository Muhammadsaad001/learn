import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: 1, brand: 'Nike', image: require('./nike.jpg'), discount: '30% off' },
  { id: 2, brand: 'Adidas', image: require('./adidas.jpg'), discount: '40% off' },
  { id: 3, brand: 'Puma', image: require('./adidas.jpg'), discount: '50% off' },
];

const SalesPage = () => {
  const renderSaleCard = ({ item }) => (
    <View style={styles.saleCard}>
      <Image source={item.image} style={styles.brandImage} />
      <Text style={styles.brandName}>{item.brand}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Collection Sales</Text>
      <FlatList
        data={data}
        renderItem={renderSaleCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  saleCard: {
    width: '48%',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  brandImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  discount: {
    fontSize: 14,
    textAlign: 'center',
    color: 'green',
  },
});

export default SalesPage;
