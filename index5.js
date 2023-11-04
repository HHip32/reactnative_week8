import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

export default function index5({ navigation, route }) {

    // Handle quantity of order donut

    const [count, setCount] = useState(0);

    const handleCountUp = () => {
        setCount(count + 1);
    }
    const handleCountDown = () => {
        if (count > 0)
            setCount(count - 1);
        if (count == 0) {
            setCount(0)
        }

    }
    // get donut seleted in index4
    const { donutSelected } = route.params

    return (
        <View style={styles.container}>
            <View style={{ width: 390, height: 285, marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: donutSelected.image }}
                    style={{ width: 272, height: 278, padding: 10 }}
                />
            </View>
            <Text
                style={{ width: 186, height: 35, padding: 20, fontSize: 20, fontWeight: '700', lineHeight: 23.44 }}
            >
                {donutSelected.name}
            </Text>
            <View style={{ width: 370, height: 40, flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 10, marginTop: 15 }}>
                <Text
                    style={{ width: 264, height: 35, fontSize: 15, fontWeight: '700', lineHeight: 17.58, color: '#757575' }}
                >
                    {donutSelected.desc}
                </Text>
                <Text
                    style={{ width: 64, height: 23, fontSize: 20, fontWeight: '700', lineHeight: 23.44 }}
                >
                    {donutSelected.price}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: 360, marginLeft: 15, justifyContent: 'space-between' }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: 24 }}>
                            <Image
                                source={require('./assets/Vector.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </View>
                        <Text
                            style={{ width: 105, height: 35, fontSize: 15, fontWeight: 700, lineHeight: 17.58, color: '#757575', marginLeft: 7 }}
                        >
                            Delivery in
                        </Text>
                    </View>
                    <Text
                        style={{ width: 68, height: 35, marginLeft: 20, fontSize: 20, fontWeight: 700, lineHeight: 23.44 }}
                    >
                        30 min
                    </Text>
                </View>
                <View style={{ width: 70, height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable
                        style={{ width: 21, height: 21 }}
                        onPress={handleCountDown}
                    >
                        <Image
                            source={require('./assets/Group 16.png')}
                            style={{ width: 21, height: 21 }}
                        />
                    </Pressable>

                    <Text style={{ width: 16, height: 24, textAlign: 'center', fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}>
                        {count}
                    </Text>
                    <Pressable
                        style={{ width: 21, height: 21 }}
                        onPress={handleCountUp}
                    >
                        <Image
                            source={require('./assets/Group 15.png')}
                            style={{ width: 21, height: 21 }}
                        />
                    </Pressable>

                </View>
            </View>
            <Text
                style={{ width: 182, height: 35, marginLeft: 20, marginTop: 10, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}
            >
                Restaurants info
            </Text>
            <Text
                style={{ width: 330, height: 81, marginLeft: 15, marginTop: 5, fontFamily: 'Roboto', fontWeight: 700, fontSize: 15, lineHeight: 17.58, color: '#545454' }}
            >

                Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
            </Text>
            <Pressable
                style={{ width: 350, height: 58, marginLeft: 20, backgroundColor: '#F1B000', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Text
                    style={{ width: 136, height: 35, fontFamily: 'Roboto', fontWeight: 700, fontSize: 25, lineHeight: 29.3, color: '#FFFDFD' }}
                >
                    Add to cart
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center'
    },
});