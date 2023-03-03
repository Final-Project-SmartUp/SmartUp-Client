import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../stores/actions/actionCreator';

const LoginPage = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
 
  

  function getEmailDataValue(e){
      setEmail(e)
  }
  function getPasswordDataValue(e){
    setPassword(e)
  }
 
  const handleLogin = (e) => {
      dispatch(login({
        email:email,
        password:password
      }))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={getEmailDataValue}
        value={email}
        name="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={getPasswordDataValue}
        value={password}
        secureTextEntry={true}
        name="password"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5F1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    margin: 8,
    width: '80%',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 12,
    margin: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginPage;
