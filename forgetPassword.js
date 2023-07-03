import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = () => {
    // Perform necessary validation and send password reset email
    if (email) {
      // Simulate sending email by setting isEmailSent to true
      setIsEmailSent(true);
    }
  };

  return (
    <View style={styles.container}>
      {!isEmailSent ? (
        <View>
          <Text style={styles.heading}>Forgot Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.emailSent}>Password reset email sent to {email}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  resetButton: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  emailSent: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ForgotPasswordPage;