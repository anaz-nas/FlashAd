/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { ArrowForward_red, EyeOff, Logo } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

    navigation.navigate('Home' as never);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={require('../../Assets/PNG/BestDeals.png')}
          style={styles.cardImage}
        >
          <Logo height={30} width={78} />
          <TouchableOpacity style={styles.browseButton}>
            <Text style={styles.browseButtonText}>Browse Deals</Text>
            <ArrowForward_red
              width={20}
              height={20}
              style={{ marginLeft: 6 }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Welcome back! Pick up where you left off.
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!passwordVisible}
          style={[styles.input, { flex: 1, marginBottom: 0, borderWidth: 0 }]}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <EyeOff width={22} height={22} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword' as never)}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 380,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  browseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    borderRadius: 8,
  },
  browseButtonText: {
    color: '#BA181B',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#161A1D',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 16,
    fontSize: 14,
    backgroundColor: '#EFEDED',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingRight: 12,
    backgroundColor: '#EFEDED',
  },
  eyeIcon: {
    marginLeft: 8,
  },
  forgotText: {
    textAlign: 'right',
    fontSize: 14,
    color: '#4E565B',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#BA181B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4E565B',
    fontWeight: 'bold',
  },
  signupLink: {
    color: '#BA181B',
    fontWeight: 'bold',
  },
});
