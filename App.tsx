import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [exibe, setExibe] = useState<boolean>(false);
  return (
    <View style={styles.container }>
      <View>
        {(exibe)
          ? <Text style={styles.text}>Esconde</Text>
          : <Text style={styles.text}>Mostra</Text>
        }
      </View>
      <Button
        title="Aperte"
        onPress={() => setExibe(!exibe)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 25
  }
});
