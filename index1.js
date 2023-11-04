import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { useState } from 'react';



export default function index1({ navigation, route }) {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', top: 30 }}>
                <Image
                    source={require('./assets/Image 95.png')}
                    style={{ width: 271, height: 271 }}
                />
            </View>
            <Text style={{ width: 200, height: 72, fontFamily: 'Epilogue', fontWeight: 700, fontSize: 24, lineHeight: 36, color: '#8353E2', textAlign: 'center', top: 70 }}>MANAGE YOUR TASK</Text>
            <View style={{ width: '90%', height: 40, flexDirection: 'row', top: 135, borderWidth: 1, borderRadius: 10, alignItems: 'center' }}>
                <View style={{ width: 50, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('./assets/Frame2.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </View>
                <TextInput
                    style={{ width: 300, height: 40, fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: 26 }}
                    placeholder='Enter your name'
                    placeholderTextColor={'#BCC1CA'}
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <Pressable
                style={{ top: 175, width: 190, height: 44, borderWidth: 1, borderRadius: 12, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => { 
                    navigation.navigate('index2') 
                    global.appName = name;
            }}
            >
                <Text style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: 26, color: '#FFFFFF' }}>
                    GET STARTED
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});
