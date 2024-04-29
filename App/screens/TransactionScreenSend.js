import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
// import { useAssets } from 'react-native-assets';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Remembering the user

const TransactionScreen = () => {
  // const [assets] = useAssets([require('./assets/nfc-animation.gif')]);
  const route = useRoute();
  const receivedData = route.params?.data; // Use optional chaining to handle missing data
  console.log('Received data:', receivedData);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      {/* {assets && (
        <Image
          source={{ uri: assets[0] }}
          style={styles.nfcAnimation}
        />
      )} */}
      <Text style={styles.instructions}>
        1. Bring the other device closer to this phone.
        {'\n'}
        2. Turn on NFC on both devices.
        {'\n'}
        3. A prompt will appear on the other device asking to receive money.
        {'\n'}
        4. Confirm the amount ({receivedData.amount}) and send.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nfcAnimation: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default TransactionScreen;
