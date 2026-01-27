import { StyleSheet, Text, View } from "react-native"
import { PopUpHeader } from "../../components/headers/PopUpHeader"
import { useState } from "react"
import { palette } from "../../styles/color"
import MapView from 'react-native-maps';



export const SchedulMapDetailScreen = () => {

  const [sharelocation, setSharelocation] = useState<boolean>(false)

  return (
    <View style={styles.screen}>
      <PopUpHeader/>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 37.00000,
            longitude: 126.00000,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
      }}
      
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.white,
  },
  
  map: {
    width: '100%',
    height: '100%',
  },
});