import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import Admin from "./Admin";
import Cards from "./cards";
import Registration from "./registration";
import { Audio } from 'expo-av';
import ForgetPassword from "./forgetPassword";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Footer from "./Footer";
import Camera from "./camera";
import Collectionsales from "./CollectionSales";
import Notifications from "./Notifications";
import ItemCardPage from "./ItemCardPage";
import ItemListPage from "./ItemListPage";
const Stack = createNativeStackNavigator();

function Feed({ navigation }) {
  return <View style={{ justifyContent: '', alignItems: '' }}>
  <View>
  <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        initialParams={{itemId: 42}}
        />
        <Stack.Screen 
        name="cards" 
        component={CardsList} 
        initialParams={{itemId: 42}}
        />
        <Stack.Screen 
        name="admin" 
        component={Adminpage} 
        initialParams={{itemId: 42}}
        />
       <Stack.Screen 
        name="Registration" 
        component={Registration1} 
        initialParams={{itemId: 42}}
        />
      
      <Stack.Screen 
        name="ForgetPassword" 
        component={ForgetPassword1} 
        initialParams={{itemId: 42}}
        />
        <Stack.Screen 
        name="Camera" 
        component={Camera2} 
        initialParams={{itemId: 42}}
        />
        <Stack.Screen name="ItemList" component={ItemListPage} />
        <Stack.Screen name="ItemCard" component={ItemCardPage} />
        
        
      </Stack.Navigator>
      </View>
       
  </View>
}
const HomeScreen = ( {navigation} ) => {
const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform search logic using the searchQuery
    console.log('Performing search for:', searchQuery);
  };
  return (
  <View>
    <View style={styles.button}  >
    <Button 
      title="login foam"
      onPress={() => navigation.navigate('Profile')}      
    />
    <Button 
      title="Cards list"
      onPress={() => navigation.navigate('cards')}      
    />
    <Button 
      title=" profile page"
      onPress={() => navigation.navigate('admin')}      
    />
     <Button 
      title=" item List"
      onPress={() => navigation.navigate('ItemList')}      
    />
   

    </View>
    <View>
     
    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="search"
        
      />
    <Text style={styles.middlesection}>Categories </Text>
    </View>
     <View style={{marginTop:30}}>
        <Cards/>
        </View>
    
    <Footerside/>
    

    
    

   </View>
  
  );
};

const ProfileScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return ( 
    <View style={styles.container}>
  
  <Image style={styles.image} source={require("./savelogin.jpg")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={[styles.TextInput,{color:"white"}]}
          placeholder="Email."
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="     Password."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View>
       <TouchableOpacity style={styles.inputView1} onPress={()=>navigation.navigate('Camera')}>
        <Text style={styles.TextInput}>Take Your Image </Text> 
      </TouchableOpacity> 
      </View>
      <TouchableOpacity style={styles.inputView1}  onPress={()=>navigation.navigate('ForgetPassword')}>
        <Text style={styles.TextInput}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.inputView1}  onPress={() => navigation.navigate('Registration')  }>
        <Text style={styles.TextInput}>Regitration form</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.inputView2}   onPress={() => navigation.goBack()  } >
        <Text style={styles.TextInput}    >LOGIN</Text> 
      </TouchableOpacity>
  
  </View>
  );
}
const CardsList=()=>{
  return (
    <View>
    <Cards/>
    </View>
  )
}
const Adminpage=()=>{
  return (
    <View>
    <Admin/>
    </View>
  )
}
const Camera2=()=>{
  return (
    <View>
    <Camera/>
    </View>
  );
}
const Registration1=()=>{
  return (
    <View>
    <Registration/>
    </View>
  )
}
const ForgetPassword1=()=>{
  return (
    <View>
    <ForgetPassword/>
    </View>
  )
}
const Footerside=()=>{
  return (
    <Text>
    <Footer/>
    </Text>
  )
}
const Notification11=()=>{
  return (
    <Text>
    <Notifications/>
    <Collectionsales/>
    </Text>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.drawer} {...props}>
      <DrawerItemList {...props} />

      
      
     

          
      

        
      


    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator style={styles.drawer}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen   name="Shopping App" options={{
        color:"white"
        }}
       component={Feed} />

      <Drawer.Screen name="Home" component={Feed} />
         <Drawer.Screen name="Notification " component={Notification11} />
        <Drawer.Screen name="item cards " component={ItemListPage} />
         <Drawer.Screen name="Admin " component={Adminpage} />

      
        
      
    

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
     
    
        
      
    
     <MyDrawer/>
     
     
     
    </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
 container:{
backgroundColor:"white",
 },
  button: {
    backgroundColor: 'white',
    padding: -2,
    borderRadius: 2,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  
  image: {
    marginBottom: 40,
    height:250,
    width:330,
    marginLeft:0,
  },
  reg:{

  },
  inputView2:{
backgroundColor: "black",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    color:"white",
    marginLeft:50,

  },
  inputView1:{
    backgroundColor: "black",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    color:"white",
    marginLeft:20,
  },
  inputView: {
    backgroundColor: "black",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    color:"white",
    marginLeft:20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:"white"
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft:110,
    color:"",

  },
  loginText:{
    color:"white",
   fontFamily:""
    },
  middlesection:{
   color:"black"
   ,
  fontSize:'250%',
  fontWeight:"12",
  backgroundColor:"",

  
  },
   drawer:{
backgroundColor:"white",
   },
   drawerbutton:{
     color:"white"
   },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -28,
    backgroundColor: "green",
    marginLeft:37,
  },
});
