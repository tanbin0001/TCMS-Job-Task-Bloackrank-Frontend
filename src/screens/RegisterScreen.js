import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { TextInput } from "react-native-paper";
import { useRegisterMutation } from "../redux/api/authApi/authApi";

const RegisterScreen = (props) => {
  const {navigation} = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");  
  const [register, isSuccess] = useRegisterMutation();

  const handleLogin = async () => {
    try {
      const registerData = {
        username,
        email,
        password,
      };
      register(registerData);
      navigation.navigate("Login")
 
    } catch {
      alert("error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={tw`text-purple-500 text-2xl mb-6`}>Please Register</Text>
      {/* //! class */}
      <View className="space-y-4 ">
        <TextInput
          label="Username"  
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          label="Email"  
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={tw`my-2`}
          label="Password"  
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={[tw`bg-purple-500 rounded-md`, styles.button]}
          onPress={handleLogin}
        >
          <Text style={tw`text-white text-lg font-semibold text-center `}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { 
 
 navigation.navigate("Login");
}}>
    <Text>Already Have an account? Please Login</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default RegisterScreen;
