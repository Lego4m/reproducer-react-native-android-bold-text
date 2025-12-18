/* eslint-disable react-native/no-inline-styles */

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// @ts-expect-error
// eslint-disable-next-line @react-native/no-deep-imports
import { version } from 'react-native/Libraries/Core/ReactNativeVersion';

export const Reproducer = () => {
  const reproducers = [
    {
      title: 'Flex Row',
      reproducerJsx: (
        <View style={{ flexDirection: 'row' }}>
          <Text>My Gyms</Text>

          <Text>Gym Finder</Text>
        </View>
      ),
    },
    {
      title: 'Flex Row +\nFont Size (12, 13, 14, 15)',
      reproducerJsx: (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 12 }}>fontSize: 12</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 13 }}>fontSize: 13</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 14 }}>fontSize: 14</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15 }}>fontSize: 15</Text>
          </View>
        </View>
      ),
    },
    {
      title: 'Flex Row +\nFont Size (12, 13, 14, 15, 18) +\nWhite space on the beginning',
      reproducerJsx: (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 12 }}>{' 12/14'}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 13 }}>{' 12/14'}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 14 }}>{' 12/14'}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15 }}>{' 12/14'}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18 }}>{' 12/14'}</Text>
          </View>
        </View>
      ),
    },
    {
      title: 'Flex Row +\nFont Size (12, 13) +\nFont Weight Bold (works correctly)',
      reproducerJsx: (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>fontSize: 12</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>fontSize: 13</Text>
          </View>
        </View>
      ),
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text>
          These examples break when you enable the "Bold text" option in the Android settings.
        </Text>

        <Text>
          React Native Version: {version.major}.{version.minor}.{version.patch}-{version.prerelease}
        </Text>

        {reproducers.map(({ title, reproducerJsx }, index) => (
          <View key={index}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.container}>{reproducerJsx}</View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#e5e7eb',
    padding: 12,
    borderRadius: 8,
  },
});
