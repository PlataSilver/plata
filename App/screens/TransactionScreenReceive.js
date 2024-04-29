import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      receivedData: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.startNfc();
  }

  componentWillUnmount() {
    this.stopNfc();
  }

  async startNfc() {
    try {
      await NfcManager.start();
      this.setState({ isLoading: false });
    } catch (ex) {
      console.warn('Error starting NFC', ex);
      this.setState({ isLoading: false });
    }
  }

  async stopNfc() {
    try {
      await NfcManager.stop();
    } catch (ex) {
      console.warn('Error stopping NFC', ex);
    }
  }

  async writeNdef({ type, value }) {
    let result = false;

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        result = true;
      }
      alert('Tag Written!');
      // Navigate or do something else after writing the tag
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }

    return result;
  }

  render() {
    const { isLoading, receivedData } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Receive Money</Text>
        <Text style={styles.instructions}>
          1. Bring the other device closer to this phone.
          {'\n'}
          2. Turn on NFC on both devices.
          {'\n'}
          3. A prompt will appear on the other device asking to send money.
        </Text>
        <TouchableOpacity 
          onPress={() => this.writeNdef({ type: 'TEXT', value: 'Your email or data here' })} 
          style={styles.button} >
          
            <Text style={styles.buttonText}>Receive</Text>
          
          </TouchableOpacity>
      </View>
    );
  }
}

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
    width: '80%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  instructions: {
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default TransactionScreen;
