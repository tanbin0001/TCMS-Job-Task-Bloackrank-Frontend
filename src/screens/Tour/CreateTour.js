 

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { useCreateTourMutation } from '../../redux/api/TourApi/tourApi';
 


const CreateTour = () => {
  const [tourName, setTourName] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [tourCreator, setTourCreator] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [expenseStatus, setExpenseStatus] = useState('');
  const [createTour] = useCreateTourMutation();

  const handleCreateTour = async () => {
    // Logic to handle creating the tour with the input values
    const newTour = {
      tourName,
      destination,
      duration,
      tourCreator,
      expenseStatus,
      imageLink
    };
    console.log("New Tour:", newTour);
    const res = await createTour(newTour)
    
    console.log(res);
  };

  return (
    <View style={styles.container}>
      <Text style={[tw`text-purple-500`, tw`text-2xl`, tw`mb-6`]}>Create Tour</Text>

      <TextInput
        style={[tw`border-2`, tw`rounded-md`, tw`p-2`, tw`mb-4`]}
        placeholder="Tour Name"
        value={tourName}
        onChangeText={setTourName}
      />
      <TextInput
        style={[tw`border-2`, tw`rounded-md`, tw`p-2`, tw`mb-4`]}
        placeholder="Destination Image Link"
        value={imageLink}
        onChangeText={setImageLink}
      />
 
      <TextInput
        style={[tw`border-2`, tw`rounded-md`, tw`p-2`, tw`mb-4`]}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={[tw`border-2`, tw`rounded-md`, tw`p-2`, tw`mb-4`]}
        placeholder="Duration"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput
        style={[tw`border-2`, tw`rounded-md`, tw`p-2`, tw`mb-4`]}
        placeholder="Tour Creator"
        value={tourCreator}
        onChangeText={setTourCreator}
      />
      <TextInput
        style={[tw`border-2`, tw`rounded-md`, tw`p-2`, tw`mb-4`]}
        placeholder="Expense Status"
        value={expenseStatus}
        onChangeText={setExpenseStatus}
      />

      <Button title="Create Tour" onPress={handleCreateTour} color="#BC5FFF" />
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
  

export default CreateTour;
