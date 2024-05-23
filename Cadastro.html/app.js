import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert, Image } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  const handleCadastro = () => {
    if (senha !== confSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    const formData = { email, senha, conf_senha: confSenha };

    fetch('http://192.168.1.141:3000/atualizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        Alert.alert(data);
      })
      .catch(error => {
        console.error('Erro:', error);
        Alert.alert('Erro ao enviar os dados');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Image source={{ uri: 'path_to_your_logo_image' }} style={styles.logo} />
        <Text style={styles.writeIt}>Write It</Text>
      </View>
      <View style={styles.divisor} />
      <View style={styles.borda}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.form}>
          <View style={styles.singleInput}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.singleInput}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
          <View style={styles.singleInput}>
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              value={confSenha}
              onChangeText={setConfSenha}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity onPress={handleCadastro} style={styles.button}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.divisor2} />
        <TouchableOpacity>
          <Image source={{ uri: 'path_to_your_instagram_image' }} style={styles.insta} />
        </TouchableOpacity>
      </View>
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
  headerContent: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: 40, // Ajuste conforme necessário
    height: 40, // Ajuste conforme necessário
    left: '3%',
    top: '3%',
  },
  writeIt: {
    position: 'absolute',
    left: '10%',
    top: '5%',
    fontSize: 30,
    fontFamily: 'Brush Script MT, Brush Script Std, cursive',
    color: '#702C2B',
  },
  divisor: {
    width: '100%',
    height: 5,
    backgroundColor: '#EEEEEE',
    marginTop: 90,
  },
  borda: {
    width: 330,
    height: 350,
    borderRadius: 20,
    backgroundColor: '#fffaf6',
    borderWidth: 4,
    borderColor: '#7D3C3B',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 28,
    color: '#D3ADAD',
    marginBottom: 30,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  singleInput: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fffaf6',
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
  },
  button: {
    width: 70,
    height: 30,
    backgroundColor: '#fffaf6',
    borderColor: '#C56869',
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
  },
  footer: {
    alignItems: 'center',
    marginTop: 50,
  },
  divisor2: {
    width: '100%',
    height: 4,
    backgroundColor: '#EEEEEE',
    marginBottom: 10,
  },
  insta: {
    width: 30,
    height: 30,
  },
});
