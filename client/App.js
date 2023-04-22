import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import routes from './config/api';
import React, { useState, useEffect } from 'react';

export default function App() {

  const [clicked, setClicked] = useState(false);
  const [testMessage, setTestMessage] = useState("");

  useEffect(() => {
    if(clicked) {
      setClicked(false);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({}),
      }
      const fetchData = async () => {
        await fetch(routes.test, requestOptions)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTestMessage(data);
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      };
      fetchData();
    }
  }, [clicked]);
  
  const handleButtonClick = () => {
    setClicked(true);
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
