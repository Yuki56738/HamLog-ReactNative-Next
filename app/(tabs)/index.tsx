import {Image, StyleSheet, Platform, ScrollView, Text, View, TextInput} from 'react-native';



export default function HomeScreen() {
  return (
        <ScrollView style={styles.container}>
            <Text>Some text</Text>
            <TextInput
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
  }
});
