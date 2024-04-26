import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
    let location = {
        latitude: 44.606388,
        longitude: 17.859719,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    }
  return (
    <View style={styles.container}>
        <MapView
            style={StyleSheet.absoluteFillObject}
            provider={"google"}
            mapType={"hybrid"}
            region={location}>

        </MapView>
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
