import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function DetailsScreen() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}