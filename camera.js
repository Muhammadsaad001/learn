import React, { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Platform } from 'react-native';
import { Camera, CameraType, FlashMode, AutoFocus, MediaLibrary } from 'expo-camera';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const camerref = useRef(null);
  const [capturedMedia, setCapturedMedia] = useState([]);
  const [focusMode, setFocusMode] = useState(AutoFocus.on);
  const [flashMode, setFlashMode] = useState(FlashMode.torch);

  const TakePicture = async () => {
    if (camerref.current) {
      const photo = await camerref.current.takePictureAsync();
      setCapturedMedia(prevMedia => [...prevMedia, photo.uri]);
    }
  };

  const TakeVideo = async () => {
    if (camerref.current) {
      const video = await camerref.current.recordAsync();
      setCapturedMedia(prevMedia => [...prevMedia, video.uri]);
    }
  };

  const saveMedia = async () => {
    if (Platform.OS === 'android') {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission not granted to save media');
        return;
      }
    }

    for (let uri of capturedMedia) {
      await MediaLibrary.saveToLibraryAsync(uri);
    }
    console.log('Media saved to library');
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function toggleFocusMode() {
    setFocusMode(prevMode => (prevMode === AutoFocus.on ? AutoFocus.off : AutoFocus.on));
  }

  function toggleFlashMode() {
    setFlashMode(prevMode => (prevMode === FlashMode.off ? FlashMode.torch : FlashMode.off));
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Camera
          ref={camerref}
          style={styles.camera}
          type={type}
          autoFocus={focusMode}
          flashMode={flashMode}
        >
          <View style={styles.buttonContainer}>
     
            <TouchableOpacity style={styles.button} onPress={toggleFocusMode}>
              <Text style={styles.text}>
                {focusMode === AutoFocus.on ? 'Auto Focus' : 'Continuous Focus'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleFlashMode}>
              <Text style={styles.text}>{flashMode === FlashMode.on ? 'Flash On' : 'Flash Off'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Take Photo" onPress={TakePicture} />
            <Button title="Take Video" onPress={TakeVideo} />
          </View>
        </Camera>
      </View>
      <View style={{ flex: 1 }}>
        {capturedMedia.map((mediaUri, index) => (
          <Image key={index} source={{ uri: mediaUri }} style={styles.mediaPreview} />
        ))}
      </View>
      {capturedMedia.length > 0 && (
        <View style={styles.bottomButtonContainer}>
          <Button title="Save Media" onPress={saveMedia} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  mediaPreview: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  bottomButtonContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
});
