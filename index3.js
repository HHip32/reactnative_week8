import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import { useState } from 'react';

export default function index3({ navigation, route }) {
    const [newJob, setNewJob] = useState('');



    const { handleAddNewJob } = route.params;
    const { handleEditJob } = route.params;
    const { jobToEdit } = route.params;

    const handleEditOrAddJob = () => {
        if (isEditing) {
            if (newJob.trim() !== '') {
                handleEditJob({ ...jobToEdit, name: newJob });
            }

        } else {
            if (newJob.trim() !== '') {
                handleAddNewJob(newJob);
            }
        }
        navigation.goBack();
    };

    // get state of edit or add job
    const isEditing = route.params.isEdit
    const buttonText = isEditing ? 'CONFIRM' : 'FINISH';
    const pageTitle = isEditing ? 'EDIT YOUR JOB' : 'ADD YOUR JOB';


    const handleAddJob = () => {
        if (newJob.trim() !== '') {
            handleAddNewJob(newJob);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={{ width: 258, height: 48, marginTop: 30, fontFamily: 'Epilogue', fontWeight: 700, fontSize: 32, lineHeight: 48, textAlign: 'center' }}>{pageTitle}</Text>
            <View style={{ flexDirection: 'row', width: 334, height: 44, marginTop: 50, alignItems: 'center', borderWidth: 1, borderRadius: 4, borderColor: '#9095A0' }}>
                <View style={{ width: '15%', height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('./assets/Frame8.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </View>
                <TextInput
                    style={{ width: '85%', height: '100%' }}
                    placeholder={isEditing ? 'edit your job' : 'input your job'}
                    onChangeText={text => setNewJob(text)}
                // value={isEditing ? jobToEdit : newJob}
                />
            </View>
            <Pressable
                style={{ width: 190, height: 44, borderWidth: 1, borderRadius: 12, backgroundColor: '#00BDD6', alignItems: 'center', justifyContent: 'center', marginTop: 80 }}
                onPress={handleEditOrAddJob}
            >
                <Text style={{ width: 82, height: 26, fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: 26, color: '#FFFFFF', textAlign: 'center' }}>
                    {buttonText}</Text>
            </Pressable>
            <View style={{ width: 320, height: 200, justifyContent: 'center', alignItems: 'center', marginTop: 90 }}>
                <Image source={require('./assets/Image 95.png')}
                    style={{ width: 190, height: 200 }}
                />
            </View>
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