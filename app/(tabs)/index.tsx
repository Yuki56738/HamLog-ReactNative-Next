import {Image, StyleSheet, Platform, ScrollView, Text, View, TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {white} from "colorette";

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
