import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index1 from './index1';
import index2 from './index2';
import index3 from './index3';
import index4 from './index4';
import index5 from './index5';

const Stack = createNativeStackNavigator();

function Index2HeaderRight() {
  const name = global.appName;
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require('./assets/Frame6.png')}
        style={{ width: 50, height: 50 }}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ width: 101, height: 30, fontFamily: 'Epilogue', fontWeight: 700, fontSize: 20, lineHeight: 30, textAlign: 'center' }}>
          Hi {name}
        </Text>
        <Text style={{ width: 168, height: 22, fontFamily: 'Epilogue', fontWeight: 700, fontSize: 14, lineHeight: 22, textAlign: 'center', color: '#696B6F' }}>
          Have agrate day ahead
        </Text>
      </View>
    </View>
  );
}
function Index3HeaderRight({ navigation }) {
  return (
    <Pressable onPress={() => { navigation.goBack() }}>
      <View style={{ width: 36, height: 36 }}>
        <Image
          source={require('./assets/Frame7.png')}
          style={{ width: 22, height: 22 }}
        />
      </View>
    </Pressable>

  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='index4'>
          <Stack.Screen name="index1" component={index1} options={{ headerShown: false }} />
          <Stack.Screen
            name="index2"
            component={index2}
            options={{
              headerTitle: null,
              headerRight: () => <Index2HeaderRight />
            }}
          />
          <Stack.Screen
            name="index3"
            component={index3}
            options={({ navigation }) => ({
              headerTitle: null,
              header: () => (
                <View style={{ width: '100%', height: 70, backgroundColor: '#FFFFFF', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                  <Index2HeaderRight />
                  <Index3HeaderRight navigation={navigation} /> {/* Truyền navigation vào Index3HeaderRight */}
                </View>
              ),
            })}
          />
          <Stack.Screen name="index4" component={index4} options={{ headerShown: false }} />
          <Stack.Screen name="index5" component={index5} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
