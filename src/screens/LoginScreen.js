 
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import tw from "twrnc";
 
import { useLoginMutation } from "../redux/api/authApi/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/authSlice";
 

const LoginScreen = (props) => {
  const {navigation} = props;
  const [username, setUsername] = useState("");;
  const [password, setPassword] = useState("");
  const [text, setText] = useState(""); 
  const dispatch = useAppDispatch();
 
  
  const [login] = useLoginMutation()
  const handleLogin = async () => {
    try {
  
      const loginData = {
        username,
        password,
      };

     
 

      const res = await login(loginData).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res.data.token }));
      navigation.navigate("Home")
 

   
      alert('success')
    } catch(error) {
       console.log(error);
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
        <TouchableOpacity onPress={() => { 
 
    navigation.navigate("Register");
}}>
       <Text>Don't have an account? Please Register</Text>
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
