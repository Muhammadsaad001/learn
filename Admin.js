import React,{useState} from 'react';
import { View, StyleSheet,Text,TouchableOpacity,FlatList ,TextInput,Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Tabnavigator from "./tabnavigator";

import Svg, { Path, LinearGradient, Stop ,Line} from 'react-native-svg';
const AdminPage = () => {
  const data1 = [10, 20, 40, 30, 50, 40, 20]; // Sample data for customer acquisition cost
  const maxValue = Math.max(...data1); // Find the maximum value in the data array

  const graphWidth = 300; // Width of the graph
  const graphHeight = 200; // Height of the graph

  // Calculate the x and y coordinates for the graph path
  const path = data1.map((value, index) => {
    const x = (graphWidth / (data1.length - 1)) * index;
    const y = graphHeight - ((value / maxValue) * graphHeight);
    return `${x},${y}`;
  });

  // Create a color gradient for the mountain graph
  const gradientColors = ['rgba(0, 0, 255, 0.8)', 'rgba(0, 0, 255, 0)']; // Blue gradient
  const gradient = (
    <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
      <Stop offset="0" stopColor={gradientColors[0]} />
      <Stop offset="1" stopColor={gradientColors[1]} />
       <Stop offset="1" stopColor={gradientColors[1]} />
    </LinearGradient>
  );
  // Mock product data
  const productData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [50, 45, 70, 65, 80, 75],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color
      strokeWidth: 2,
    },
  ],
};
const Tab=()=>{
  return (
    <>
    <Tabnavigator/>
    </>
  );
}
const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for labels
};
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');

  const handleAddFeedback = () => {
    if (newFeedback.trim() !== '') {
      const updatedFeedbacks = [...feedbacks, newFeedback];
      setFeedbacks(updatedFeedbacks);
      setNewFeedback('');
    }
  };

  const renderFeedbackItem = ({ item }) => {
    return (
      <View style={styles.feedbackItem}>
        <Text>{item}</Text>
      </View>
    );
  };
  


  return (
    <View style={styles.container}>
      
    <Text style={styles.text}> products Chart</Text>
      <View style={styles.graphContainer}>
        
        <LineChart
          data={productData}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.graph}
        />
        
        
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:-130 }}>
      <Svg height="200" width="300">
        <Line x1="0" y1="100" x2="300" y2="100" stroke="black" strokeWidth="2" />
        <Line x1="0" y1="150" x2="300" y2="150" stroke="red" strokeWidth="2" />
      </Svg>
    </View>
      <View>
       <LineChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      </View>
      <View >
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
      <Text style={styles.graphText}>Customer Purchase Graph</Text>
      {/* Your graph component goes here */}
    
      <Svg width={graphWidth} height={graphHeight}>
        {gradient}
        <Path d={`M0,${graphHeight} L${path.join(' ')} L${graphWidth},${graphHeight}`} fill="url(#gradient)" />
      </Svg>
    </View>
       
      <Text style={styles.name}>Muhammad Saad</Text>
      <Text style={styles.role}>Partner</Text>
      <Text style={styles.description}>
       “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
      </Text>
       <Image source={require('./tommy.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>Tom Cruise</Text>
      <Text style={styles.role}>Partner</Text>
      <Text style={styles.description}>
       “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
      </Text>
      </View>
      {/* Render product list component */}
     
      <Text style={styles.text}>Feedbacks</Text>
     <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback"
        value={newFeedback}
        onChangeText={(text) => setNewFeedback(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddFeedback}>
        <Text style={styles.buttonText}>Add Feedback</Text>
      </TouchableOpacity>
      <FlatList
        data={feedbacks}
        renderItem={renderFeedbackItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No feedbacks yet</Text>}
      />
     
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: '',
    
  },
  graphContainer: {
    width: '80%',
    height: 250,
    marginVertical: 20,
  },
  graph: {
    marginVertical: 8,
    borderRadius: 16,
  },
  flex:{
    flexDirection:"row",
  },
  text:{
    color:"black",
  fontSize:'250%',
  fontWeight:"12",
  backgroundColor:""
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  feedbackItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
   chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  graphText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    
  },
  role: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AdminPage;