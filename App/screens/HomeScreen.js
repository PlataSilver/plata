import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { auth } from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(''); // State to store entered amount

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };

  const handleSend = () => {
    // Handle sending the amount (logic specific to your app)
    console.log('Sending amount:', amount);


    if (amount.trim() === '' || parseFloat(amount.trim()) <= 0) {
      // Display error message if amount is empty or non-positive
      Alert.alert('Please enter a valid amount', 'Enter the amount to send');
      return; // Prevent navigation if validation fails
    }
    const dataToSend = { amount}
    navigation.navigate('TransactionSend', {data: dataToSend}); //
  };
  const handleReceive = () => {
    console.log('Receiving');
    navigation.navigate('TransactionReceive'); //
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button_signout}>
          <Text style={styles.buttonText_signout}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.amountInput}
          placeholder="Enter Amount"
          keyboardType="numeric" // Only allow numbers
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
        <TouchableOpacity onPress={handleSend} style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReceive} style={styles.button}>
          <Text style={styles.buttonText}>Receive</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  formContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
  },
  amountInput: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
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
  button_signout: {
    backgroundColor: '#0782F9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText_signout: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
});
