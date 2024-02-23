 
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import tw from "twrnc";
 
import { useLoginMutation } from "../redux/api/authApi/authApi";
 

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(""); // Define the state variable for text
  
  const [login] = useLoginMutation()
  const handleLogin = async () => {
    try {
  
      const loginData = {
        username,
        email,
        password,
      };

      console.log(loginData);

      login(loginData)

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res.data.token }));
      console.log(user);

   
      alert('success')
    } catch {
      alert("error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={tw`text-purple-500 text-2xl mb-6`}>Please login</Text>
      {/* //! class */}
      <View className="space-y-4  ">
      <TextInput
        style={tw`border rounded p-2 my-2`}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
         style={tw`border rounded p-2 my-2  `}// Using custom styles in addition to Tailwind styles
        placeholder="Password"
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

export default LoginScreen;
