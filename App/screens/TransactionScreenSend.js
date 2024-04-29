import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

const TransactionScreenSend = () => {
  const route = useRoute();
  const [isSending, setIsSending] = useState(false);
  const receivedData = route.params?.data;
  console.log('Received data:', receivedData);
  const amountToSend = receivedData.amount; // Set the amount to send here

  useEffect(() => {
    startNfc(); // Start NFC when component mounts
    return () => {
      stopNfc(); // Stop NFC when component unmounts
    };
  }, []);

  const startNfc = async () => {
    try {
      await NfcManager.start();
    } catch (ex) {
      console.warn('Error starting NFC', ex);
    }
  };

  const stopNfc = async () => {
    try {
      await NfcManager.stop();
    } catch (ex) {
      console.warn('Error stopping NFC', ex);
    }
  };

  const sendNdef = async (amount) => {
    setIsSending(true);
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const bytes = Ndef.encodeMessage([Ndef.textRecord(amount.toString())]);
      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        Alert.alert('Success', `Sent $${amount} via NFC!`);
      }
    } catch (ex) {
      console.warn('Error sending NFC tag', ex);
      Alert.alert('Error', 'Failed to send NFC tag.');
    } finally {
      setIsSending(false);
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      <Text style={styles.instructions}>
        1. Bring the other device closer to this phone.
        {'\n'}
        2. Turn on NFC on both devices.
        {'\n'}
        3. Tap "Send" to initiate sending.
        {'\n'}
        4. Confirm the amount ({receivedData.amount}) and send.
      </Text>
      <TouchableOpacity onPress={() => sendNdef(amountToSend)} style={styles.button} disabled={isSending}>
        <Text style={styles.buttonText}>
          {isSending ? 'Sending...' : `Send`}</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#0782F9',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  instructions: {
    textAlign: 'center',
    lineHeight: 20,
    paddingBottom: 15
  },
});

export default TransactionScreenSend;
