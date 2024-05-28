import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
  const sendRecoveryEmail = () => {
    alert("Enviaremos uma mensagem em sua caixa de entrada!");
    // Aqui você poderia adicionar código para enviar um email de recuperação
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
        />
      </View>
      <Button
        title="Confirmar"
        onPress={sendRecoveryEmail}
      />
      <View style={styles.footer}>
        <Text style={styles.insta}>Instagram</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf6',
     padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#D3ADAD',
    fontFamily: 'Courier New',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  footer: {
    position: 'relative',
    marginTop: 100,
  },
  insta: {
    position: 'absolute',
    bottom: 5,
    color: '#A09F9F',
  },
});

export default App;
