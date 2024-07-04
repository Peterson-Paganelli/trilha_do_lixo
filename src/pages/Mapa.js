import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function Mapa() {
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title={'São Paulo'}
          description={'Descrição do Local'}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
  },
})
