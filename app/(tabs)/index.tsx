import React from 'react';
import {Image, StyleSheet, Platform, ScrollView, Text, View, TextInput} from 'react-native';



export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text>Some text</Text>
            <TextInput
                style={styles.input}
                placeholder='Type here'
                ></TextInput>

        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 70,
      backgroundColor: 'white',
      height: 40
  },
    input: {
        // height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        // padding: 10,
        borderRadius: 5 // 追加で丸い縁取り効果を適用することができます
    }
});
