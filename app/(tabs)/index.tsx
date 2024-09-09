import React from 'react';
import {Image, StyleSheet, Platform, ScrollView, Text, View, TextInput, Button} from 'react-native';
import {Header} from "@react-navigation/elements";
import {RectButton} from "react-native-gesture-handler";


export default function HomeScreen() {
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
                    <TextInput style={styles.input} placeholder='Callsign'></TextInput>
                </View>
                <View style={styles.callsignForm}>
                    <Text style={styles.label}>HisRS</Text>
                    <TextInput style={styles.input} placeholder='HisRS'></TextInput>
                </View>
                <View style={styles.callsignForm}>
                    <Text style={styles.label}>MyRS</Text>
                    <TextInput style={styles.input} placeholder='MyRS'></TextInput>
                </View>


            </View>
            <View style={styles.containerInner}>
                <View style={styles.qthForm}>
                    <Text style={styles.label}>QTH</Text>
                    <TextInput style={styles.input} placeholder='QTH'></TextInput>
                </View>
                <View style={styles.qthForm}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder='Name'></TextInput>
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
                <Button color="#aaa" title='Save'></Button>
            </View>

        </View>

    );
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
});
