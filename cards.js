import React, { useState } from 'react';
import { View, Text, Button,Image,StyleSheet } from 'react-native';
import {  Card,  Icon ,ScrollView} from '@rneui/themed';
const users = [
{
  name: 'brynn',
  avatar: 'https://th.bing.com/th/id/R.215c7f92539b4b2c7084fda8c4364740?rik=jDqp0Q7zWEgXNQ&riu=http%3a%2f%2fwww.liveenhanced.com%2fwp-content%2fuploads%2f2018%2f03%2fCasual-Shoes-for-Men-1.jpg&ehk=1Ji%2fMXUP9scxqJ9yfivoAe4u3qp8Qp47TI3u8nb2tbo%3d&risl=&pid=ImgRaw&r=0',
},
{
  avatar1:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/B3/20/c3f0a3e9-aea1-443d-83e7-129e47194bd6.jpg"
},

];

  
  
type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = ({navigation}) => {
  const handleItemSelection = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };
  const [cards, setCards] = useState([]);
   const [selectedItems, setSelectedItems] = useState([]);
  
  

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
       
    
      <View style={styles.container}>
      
        <Card>
          <Card.Title>SHOES LIST</Card.Title>
          
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
              
              </View>
              
            );
          })}
          <Text>price:50$</Text>
           <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                 />
         

            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
           onPress={() => handleItemSelection('Item 1')} />
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>SHIRTS</Card.Title>
          <Card.Divider />
           {users.map((u, i) => {
            return (
              <View key={i} style={styles.user1}>
                <Image
                  style={styles.image1}
                  resizeMode="cover"
                  source={{ uri: u.avatar1 }}
                />
              
              </View>
              
            );
          })}
          <Text>price:50$</Text>
           <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                 />
         

            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
           onPress={() => handleItemSelection('Item 2')}  />
        </Card>
        <Card>
          <Card.Title>  SIX POCKETS</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://ae01.alicdn.com/kf/HTB1d2eKXfvsK1RjSspdq6AZepXao/IX9-Tactical-Pants-Spring-Cargo-Pants-Men-Combat-Army-Military-Six-Pockets-Pants-CottonTrousers-Men-Waterproof.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            6 pockets pents by saad Textiles ,Lahore.Pure varity cotton use by import from england
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                 />
         

            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
           onPress={() => navigation.navigate('Profile')}  />
        </Card>
        <Card containerStyle={{ marginTop: 15,flexDirection:"row"  }}>
          <Card.Title>SHIRTS</Card.Title>
          <Card.Divider />
           {users.map((u, i) => {
            return (
              <View key={i} style={styles.user1}>
                <Image
                  style={styles.image1}
                  resizeMode="cover"
                  source={{ uri: u.avatar1 }}
                />
              
              </View>
              
            );
          })}
          <Text>price:50$</Text>
           <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                 />
         

            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
           onPress={() => navigation.navigate('Profile')}  />
        </Card>
        <Card containerStyle={{ marginTop: 15,flexDirection:"row" }}>
          <Card.Title>SHIRTS</Card.Title>
          <Card.Divider />
           {users.map((u, i) => {
            return (
              <View key={i} style={styles.user1}>
                <Image
                  style={styles.image1}
                  resizeMode="cover"
                  source={{ uri: u.avatar1 }}
                />
              
              </View>
              
            );
          })}
          <Text>price:50$</Text>
           <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                 />
         

            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
           onPress={() => navigation.navigate('Profile')}  />
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>SHIRTS</Card.Title>
          <Card.Divider />
           {users.map((u, i) => {
            return (
              <View key={i} style={styles.user1}>
                <Image
                  style={styles.image1}
                  resizeMode="cover"
                  source={{ uri: u.avatar1 }}
                />
              
              </View>
              
            );
          })}
          <Text>price:50$</Text>
           <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                 />
         

            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
           onPress={() => navigation.navigate('Profile')}  />
        </Card>
      
      </View>
      
    
     
     
     
    </View>
  );
};

const styles = StyleSheet.create({

fonts: {
  marginBottom: 8,
},
user: {
  flexDirection:'row',
  marginBottom: 6,
},
user1: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 280,
  height: 150,
  marginLeft:-10,
  marginTop:-20,
},
image1: {
  width: 250,
  height: 250,
  marginLeft:0,
  marginTop:-150,
},
name: {
  marginTop:230,
  
},
});

export default Cards;