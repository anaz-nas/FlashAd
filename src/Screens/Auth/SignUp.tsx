import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { ArrowBack, Camera, EyeOff } from '../../Assets/svg';

const SignUp = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowBack height={26} width={26} />
      </TouchableOpacity>

      <Text style={styles.title}>Create an account</Text>

      <View style={styles.profileWrapper}>
        <Image
          source={require('../../Assets/PNG/BestDeals.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Camera height={22} width={22} />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {/* <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" /> */}
          <EyeOff width={22} height={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {/* <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#888" /> */}
          <EyeOff width={22} height={22} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EmailVerification' as never)}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By signing up you agree to the{' '}
        <Text style={styles.link}>Terms of Use</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 15 },
  backButton: { marginTop: 20, marginBottom: 10 },
  title: { fontSize: 23, fontWeight: 'bold', marginBottom: 20, marginTop: 5 },
  profileWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#F6F6F6',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -10,
    right: '45%',
    backgroundColor: '#f6f6f6',
    padding: 8,
    borderRadius: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: { flex: 1, height: 50 },
  button: {
    backgroundColor: '#BA181B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '400' },
  termsText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
    fontWeight: 'bold',
  },
  link: { color: '#BA181B', fontWeight: 'bold' },
});

export default SignUp;
