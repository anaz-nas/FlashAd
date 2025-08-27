import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { ArrowBackWhite } from '../../Assets/svg';

const TermsOfUse = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require('../../Assets/PNG/BlurBg.jpg')}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackWhite width={17} height={17} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Terms of Use</Text>
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>
          By accessing or using Flashad, you agree to abide by these Terms of
          Use and all applicable laws and regulations. You acknowledge that the
          content, features, and services provided on this platform, including
          but not limited to text, graphics, logos, and software, are the
          intellectual property of [Your Company Name] or its licensors and are
          protected by copyright, trademark, and other applicable laws.
        </Text>

        <Text style={styles.text}>
          Unauthorized reproduction, distribution, modification, or use of any
          content is strictly prohibited without prior written permission. We
          reserve the right to update or modify these terms at any time without
          notice, and your continued use of the services constitutes acceptance
          of the revised terms. You are responsible for maintaining the
          confidentiality of your account information, and you agree not to
          engage in activities that violate the rights of others, disrupt the
          functionality of the platform, or breach any applicable laws.
        </Text>

        <Text style={styles.text}>
          If you do not agree to these terms, you must immediately discontinue
          use of the service. Your use of [Your Service Name] is at your own
          risk, and we disclaim all warranties to the fullest extent permitted
          by law.
        </Text>
        <Text style={styles.text}>
          By accessing or using Flashad, you agree to abide by these Terms of
          Use and all applicable laws and regulations. You acknowledge that the
          content, features, and services provided on this platform, including
          but not limited to text, graphics, logos, and software, are the
          intellectual property of [Your Company Name] or its licensors and are
          protected by copyright, trademark, and other applicable laws.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: { padding: 15 },
  text: {
    fontSize: 14,
    color: '#161A1D',
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'justify',
  },
});

export default TermsOfUse;
