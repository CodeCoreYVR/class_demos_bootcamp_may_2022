import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//To create this app:
// $ npm i -g expo-cli
// $ expo init pokedex
// - choose the blank template
// Note: expo init creates a new react native project, and will also git init the project.  
// If the project is within an existing git repository, it should skip git init, but make sure that it does so 
// by deleting an extra .git in the project if it is there
// $ cd pokedex
// $ expo start

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! This is the text showing up!</Text>
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
