import React, {useState} from 'react';
import {Image, StyleSheet, Platform, ScrollView, Text, View, TextInput, Button, Pressable} from 'react-native';
import {Header} from "@react-navigation/elements";
import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000*3600*24,
    enableCache: true,
    sync:{

    }
})
export default function HomeScreen() {
    const [callsign, setCallsign] = useState('');
    const [hisRS, setHisRS] = useState('');
    const [myRS, setMyRS] = useState('');
    const [qth, setQTH] = useState('');
    const [name, setName] = useState('');
    const [remarks, setRemarks] = useState('');
    return (
        // <ScrollView style={styles.container}>
        //     <Text>Some text</Text>
        //     <TextInput
        //         style={styles.input}
        //         placeholder='Type here'
        //         ></TextInput>
        //
        // </ScrollView>
        <View style={styles.container}>
            <Header title='Hamlog by Yuki Ito'></Header>
            <View style={styles.containerInner}>
                <View style={styles.callsignForm}>
                    <Text style={styles.label}>Callsign</Text>
                    <TextInput style={styles.input} placeholder='Callsign' value={callsign} onChangeText={text => setCallsign(text)}></TextInput>
                </View>
                <View style={styles.callsignForm}>
                    <Text style={styles.label}>HisRS</Text>
                    <TextInput style={styles.input} placeholder='HisRS' value={hisRS} onChangeText={text => setHisRS(text)}></TextInput>
                </View>
                <View style={styles.callsignForm}>
                    <Text style={styles.label}>MyRS</Text>
                    <TextInput style={styles.input} placeholder='MyRS' value={myRS} onChangeText={text => setMyRS(text)}></TextInput>
                </View>


            </View>
            <View style={styles.containerInner}>
                <View style={styles.qthForm}>
                    <Text style={styles.label}>QTH</Text>
                    <TextInput style={styles.input} placeholder='QTH' value={qth} onChangeText={text => setQTH(text)}></TextInput>
                </View>
                <View style={styles.qthForm}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={text => setName(text)}></TextInput>
                </View>
                {/*<View style={styles.qthForm}>*/}
                {/*    <Text style={styles.label}>Remarks</Text>*/}
                {/*    <TextInput style={styles.input} placeholder='Remarks'></TextInput>*/}
                {/*</View>*/}
            </View>
            <View style={styles.containerInner}>
                <View style={styles.remarksForm}>
                    <Text style={styles.label}>Remarks</Text>
                    <TextInput style={styles.input} placeholder='Remarks'></TextInput>
                </View>
            </View>
            <View style={styles.containerInner}>
                <Pressable style={styles.okPressable} onPress={onPress}>
                <Text style={styles.input}>Save</Text>
                </Pressable>
            </View>
            <Text>{callsign}</Text>
        </View>

    );
}
function onPress() {
    alert('Press!');

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: 40
    },
    containerInner: {
        display: 'block',
        flexDirection: 'row',
        padding: 10,
    },
    callsignForm: {
        flex: 0.3,
    },
    label: {
        textAlign: 'center',
    },
    input: {
        // height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        // padding: 10,
        borderRadius: 5, // 追加で丸い縁取り効果を適用することができます
        padding: 5
    },
    qthForm: {
        flex: 0.5
    },
    remarksForm: {
        flex: 1
    },
    okPressable: {
        flex: 0.3,
        backgroundColor: '#32faad',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
