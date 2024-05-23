// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = () => {
        const formData = { email, senha };

        fetch('http://192.168.1.141:3000/atualizar', { // Ajuste a URL para o seu servidor
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContent}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />
                <Text style={styles.writeIt}>Write It</Text>
            </View>
            <View style={styles.divisor}></View>

            <View style={styles.loginBox}>
                <Text style={styles.nome}>Login</Text>
                <View style={styles.singleInput}>
                    <TextInput
                        required
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.singleInput}>
                    <TextInput
                        required
                        placeholder="Senha"
                        secureTextEntry
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                    <TouchableOpacity><Text style={styles.linkText}>Forgot password?</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.linkText}>Sign up</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.divisor2}></View>
                <TouchableOpacity>
                    <Image source={require('./assets/insta.png')} style={styles.insta} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerContent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20, // Add margin to separate header content from the divisor
    },
    logo: {
        width: 50,
        height: 50,
    },
    writeIt: {
        fontSize: 28,
        fontFamily: 'cursive', // Brush Script MT não é suportado nativamente no React Native
        color: '#702C2B',
        marginLeft: 10, // Add margin to separate text from the logo
    },
    divisor: {
        width: '100%',
        height: 5,
        backgroundColor: '#EEEEEE',
        marginVertical: 20,
    },
    loginBox: {
        width: '100%',
        maxWidth: 330,
        borderRadius: 20,
        backgroundColor: '#fffaf6',
        borderColor: '#7D3C3B',
        borderWidth: 4,
        opacity: 0.8,
        padding: 20,
        alignItems: 'center',
    },
    nome: {
        fontFamily: 'Courier New',
        fontSize: 28,
        color: '#D3ADAD',
        marginBottom: 30,
    },
    singleInput: {
        marginVertical: 10,
        width: '100%',
    },
    input: {
        width: '100%',
        padding: 5,
        fontSize: 16,
        backgroundColor: '#fffaf6',
        borderColor: '#D9D9D9',
        borderBottomWidth: 2,
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: '#fffaf6',
        borderColor: '#C56869',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#000',
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    linkText: {
        color: '#702C2B',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    divisor2: {
        width: '100%',
        height: 4,
        backgroundColor: '#EEEEEE',
        marginVertical: 20,
    },
    insta: {
        width: 50,
        height: 50,
    },
});

export default Login;
