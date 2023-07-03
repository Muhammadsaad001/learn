import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import App from "./App";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const RegistrationForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  <Stack.Navigator>
        
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        </Stack.Navigator>
 
        
  const handleRegister = () => {
    
    if (email && username) {
    
      setIsRegistered(true);
    }



  };
  const Login=()=>{
    return (
      
      
         <View>    
    <NavigationContainer>
     
    
        
      
    
     <App/>
     

    </NavigationContainer>
    </View>
    )
  }

  return (
    <View style={styles.container}>
    
      {!isRegistered ? (
        <View>
        <Image style={styles.image} source={require("./savelogin.jpg")} />
          <Text style={styles.heading}>Registration Form</Text>
           <Text style={styles.heading}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
            <Text style={styles.heading}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.heading}>Password</Text>
           <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          
        </View>
      ) : (
        <View>
        <Text style={styles.registrationSuccess}>Registration Successful!</Text>
        <TouchableOpacity style={styles.registerButton} onPress={()=>navigation.navigate('login')}>
            <Text style={styles.buttonText}></Text>go to login
          </TouchableOpacity>
          </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:"black",
    marginTop:-400,
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color:"white"
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color:"white"
  },
  registerButton: {
    backgroundColor: 'white',
    
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  registrationSuccess: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegistrationForm;