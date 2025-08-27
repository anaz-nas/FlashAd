import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import MainApp from './src/MainApp';
import BootSplash from 'react-native-bootsplash';

function App() {
  const isDarkMode = 'dark';

  useEffect(() => {
    const init = async () => {
      // ...do multiple sync or async tasks if needed
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
