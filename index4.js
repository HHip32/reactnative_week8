import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

export default function index4({ navigation, route }) {

    // Fetch API

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchApiData = async () => {
        try {
            const response = await fetch('https://65443ae65a0b4b04436c2d4e.mockapi.io/cakes');
            if (!response.ok) {
                throw new Error('Lỗi khi tải dữ liệu từ API');
            }
            const data = await response.json();
            setData(data);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchApiData();
    }, []);

    // Handle Search Donut

    const [searchDonut, setSearchDonut] = useState('');
    const [dataSearchDonut, setDataSearchDonut] = useState(data);

    useEffect(() => {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(searchDonut.toLowerCase()));
        setDataSearchDonut(filteredData);
    }, [searchDonut, data]);

    // handleTab

    const [selectedTad, setSelectedTab] = useState('Donut');
    const handleSelectedTab = (tabName) => {
        setSelectedTab(tabName);
        setSearchDonut(tabName);
    }

    // RenderItem for Flatlist

    const renderItem = ({ item }) => (
        <View style={{ width: 370, height: 115, marginTop: 25, marginLeft: 10, flexDirection: 'row', borderWidth: 1, borderRadius: 10, backgroundColor: '#F4DDDD' }}>
            <Pressable
                style={{ width: '35%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    navigation.navigate('index5', { donutSelected: item });
                }}
            >
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 111, height: 101 }}
                />
            </Pressable>
            <View style={{ width: '65%', height: 90, marginTop: 15, marginLeft: 15 }}>
                <Text style={{ width: 136, height: 35, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#000000' }}>
                    {item.name}
                </Text>
                <Text style={{ width: 204, height: 35, fontFamily: 'Roboto', fontWeight: 700, fontSize: 15, lineHeight: 17.58, color: '#897B7B' }}>
                    {item.desc}
                </Text>
                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ width: 136, height: 35, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#000000' }}>
                        {item.price}
                    </Text>
                    <Image
                        source={require('./assets/plus_button.png')}
                        style={{ width: 44, height: 45, marginLeft: 127, marginTop: 14 }}
                    />
                </View>

            </View>
        </View>
    )


    return (
        <View style={styles.container}>
            <Text style={{ width: 206, height: 35, padding: 10, fontFamily: 'Roboto', fontWeight: 700, fontSize: 16, lineHeight: 18.75, color: '#595959' }}>
                Welcome, Jala!
            </Text>
            <Text style={{ width: 206, height: 35, padding: 0, marginLeft: 10, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#000000' }}>
                Choice you Best food
            </Text>
            <TextInput
                style={{ width: 266, height: 46, marginLeft: 10, borderWidth: 1, borderRadius: 3, borderColor: '#C4C4C4' }}
                placeholder='Search food'
                placeholderTextColor={'#C4C4C4'}
                onChangeText={text => setSearchDonut(text)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
                <Pressable
                    style={{ width: 101, height: 35, borderWidth: 1, borderRadius: 5, backgroundColor: selectedTad === 'Donut' ? '#F1B000' : '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => handleSelectedTab('Donut')}

                >
                    <Text style={{ width: 50, height: 20, fontFamily: 'Roboto', fontWeight: 700, fontSize: 14, lineHeight: 16.41 }}>
                        Donut
                    </Text>
                </Pressable>
                <Pressable
                    style={{ width: 101, height: 35, backgroundColor: selectedTad === 'Pink Donut' ? '#F1B000' : '#FFFFFF', borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => handleSelectedTab('Pink Donut')}
                >
                    <Text style={{ width: 80, height: 20, fontFamily: 'Roboto', fontWeight: 700, fontSize: 14, lineHeight: 16.41, textAlign: 'center' }}>
                        Pink Donut
                    </Text>
                </Pressable>
                <Pressable
                    style={{ width: 101, height: 35, backgroundColor: selectedTad === 'Floating' ? '#F1B000' : '#FFFFFF', borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => handleSelectedTab('Floating')}
                >
                    <Text style={{ width: 50, height: 20, fontFamily: 'Roboto', fontWeight: 700, fontSize: 14, lineHeight: 16.41 }}>
                        Floating
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={dataSearchDonut}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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