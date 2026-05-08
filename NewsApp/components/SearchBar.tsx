import React from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Ionicons }
from '@expo/vector-icons';

import {
  COLORS,
  SHADOW,
} from '../components/themes/theme';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {

  return (
    <View style={styles.container}>

      {/* SEARCH ICON */}
      <Ionicons
        name="search-outline"
        size={22}
        color={COLORS.subText}
      />

      {/* INPUT */}
      <TextInput
        placeholder="Search news..."
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.white,

    borderRadius: 20,

    paddingHorizontal: 16,
    height: 58,

    marginBottom: 10,

    ...SHADOW,
  },

  input: {
    flex: 1,

    marginLeft: 10,

    fontSize: 15,
    color: COLORS.text,
  },
});