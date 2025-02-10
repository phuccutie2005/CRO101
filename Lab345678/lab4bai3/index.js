import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password123') {
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Hi Welcome Back! 👋</Text>
        <Text style={styles.subtitle}>Hello again, you have been missed!</Text>

        {/* Hình ảnh bên dưới dòng chữ "Hello again, you have been missed!" */}
        <Image
          source={require('./images/img1.png')} // Đảm bảo đường dẫn đúng
          style={styles.image}
          resizeMode="contain"
        />

        <Text>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={{ flex: 1, height: 50 }}
            placeholder="Enter your password"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Ionicons name={secureText ? "eye-off" : "eye"} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or Login with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.google]}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.registerLink} onPress={() => alert('Go to Register Screen')}>
            Register
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
