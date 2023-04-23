import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import routes from '../../config/api';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

const Test = () => {
    const [clicked, setClicked] = useState(false);
    const [testMessage, setTestMessage] = useState("");
    const [result, setResult] = useState({});
  
    useEffect(() => {
      if(clicked) {
        setClicked(false);

        const formData = new FormData();
        formData.append('image', {
          uri: result.uri,
          name: 'image.jpg',
          type: 'image/jpeg',
        });

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: formData,
        }

        const fetchData = async () => {
          await fetch(routes.image, requestOptions)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setTestMessage(data.message);
              console.log(data);
            })
            .catch(error => {
              console.log(error);
            });
        };
        fetchData();
      }
    }, [clicked]);
    
    const handleButtonClick = async () => {
      setClicked(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });
    
      if (!result.cancelled) {
        // Handle the selected image
        setResult(result);
        console.log(result.uri);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Button title="Click Me" onPress={handleButtonClick} />
        <Text>{testMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Test;
