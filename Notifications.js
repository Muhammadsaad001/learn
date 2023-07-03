import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: 1, type: 'message', content: 'New message from John' },
  { id: 2, type: 'message', content: 'New message from Lisa' },
  { id: 3, type: 'sale', content: 'New collection sale: 50% off' },
  { id: 4, type: 'sale', content: 'New collection sale: Buy 2, Get 1 Free' },
];

const NotificationsPage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
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
  },
  itemContainer: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  itemContent: {
    fontSize: 16,
  },
});

export default NotificationsPage;
