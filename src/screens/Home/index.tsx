import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}
