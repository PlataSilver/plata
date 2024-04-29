import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator  } from 'react-native';
import NfcManager, { NdefRecord, NfcTech } from 'react-native-nfc-manager';

const TransactionScreenReceive = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [receivedamount, setReceivedamount] = useState(null);

  const startNfcListener = async () => {
    try {
      // Request NDEF technology
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // Listen for incoming NDEF messages
      NfcManager.ndefHandler.on('message', (msg) => {
        const records = msg.records;
        if (records && records.length > 0) {
          // Check if the first record is a text record
          const firstRecord = records[0];
          if (firstRecord.type === NdefRecord.Types.TEXT) {
            try {
              // Decode the text payload assuming UTF-8 encoding
              const decodedText = NdefRecord.text.decodePayload(firstRecord.payload);
              setReceivedamount(decodedText);
              console.log('Received amount:', decodedText);
              // Handle the received amount (e.g., display, save, use for further actions)
            } catch (error) {
              console.warn('Error decoding text record:', error);
              // Handle potential decoding errors gracefully
            }
          } else {
            console.warn('Received non-text NDEF record:', firstRecord.type);
            // Handle non-text records if necessary (you may not need this)
          }
        } else {
          console.warn('Empty NDEF message received.');
        }
      });

      setIsLoading(false);
      console.log('Listening for NFC messages...');
    } catch (error) {
      console.warn('Error requesting NDEF technology:', error);
      // Handle potential errors during technology request
    }
  };

  const stopNfcListener = async () => {
    try {
      await NfcManager.cancelTechnologyRequest();
      console.log('NFC listener stopped.');
    } catch (error) {
      console.warn('Error stopping NFC listener:', error);
      // Handle potential errors during listener cancellation
    }
  };

  useEffect(() => {
    startNfcListener();

    // Cleanup listener on unmount
    return () => stopNfcListener();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive amount via NFC</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {receivedamount ? (
            <Text style={styles.amountText}>Received amount: {receivedamount}</Text>
          ) : (
            <Text style={styles.instructions}>
              Bring the other device closer and tap their phone to send a amount.
            </Text>
          )}
          <Button title="Stop Listening" onPress={stopNfcListener} disabled={!isLoading} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 20,
  },
  amountText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default TransactionScreenReceive;
