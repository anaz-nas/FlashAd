/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ArrowBack } from '../../Assets/svg';

const EmailVerification = ({ navigation }: any) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowBack height={26} width={26} />
      </TouchableOpacity>

      <Text style={styles.title}>Email Verification</Text>
      <Text style={styles.subtitle}>
        Enter the verification code received on your registered email address.
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputs.current[index] = ref;
            }}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'center' }}
      >
        <Text style={styles.resendTxt}>Resend Code</Text>
        <Text style={styles.resend}>00:29s</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  backButton: { marginTop: 20, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 30 },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 60,
    height: 60,
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
  resendTxt: {
    color: '#6A737B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginRight: 5,
  },
  resend: {
    color: '#BA181B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default EmailVerification;
