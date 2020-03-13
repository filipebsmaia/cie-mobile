import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go Sample" onPress={() => navigation.navigate('Sample')} />
    </View>
  );
}

function Sample({navigation}) {
  return (
    <View>
      <Text>Sample Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerStyle: {backgroundColor: '#7159c1'}}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sample" component={Sample} />
    </Stack.Navigator>
  );
}
