import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
   Text, 
   ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOW } from '../components/themes/theme';
import { Dropdown } from 'react-native-element-dropdown';
interface Props {
  value: string;
  onChange: (text: string) => void;
  filter: 'keyword' | 'title' | 'author';
  onFilterChange: (value: any) => void;
}
const filterData = [
  { label: 'Keyword', value: 'keyword' },
  { label: 'Title', value: 'title' },
  { label: 'Author', value: 'author' },
];

export default function SearchBar({
 value,
  onChange,
  filter,
  onFilterChange,
}: Props) {
  const [open, setOpen] = useState(false);

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
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />

      {/* FILTER ICON */}
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Ionicons
          name="filter-outline"
          size={22}
          color={COLORS.subText}
        />
      </TouchableOpacity>

      {/* FILTER MENU */}
      {open && (
      <ScrollView
    style={styles.dropdown}
    nestedScrollEnabled
  >
          <TouchableOpacity>
  <View  style={
    styles.item}>
    <Ionicons name="search-outline" size={18} />
    <Text style={[
    styles.itemText,
    filter === 'keyword' && styles.activeItem,
  ]}>Keyword</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity>
  <View style={styles.item}>
    <Ionicons name="text-outline" size={18} />
    <Text style={[
    styles.itemText,
    filter === 'title' && styles.activeItem,
  ]}>Title</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity>
  <View style={styles.item}>
    <Ionicons name="person-outline" size={18} />
    <Text style={[
    styles.itemText,
    filter === 'author' && styles.activeItem,
  ]}>Author</Text>
  </View>
</TouchableOpacity>
        </ScrollView>
      )}

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
    marginBottom: 16,
    ...SHADOW,
    position: 'relative',
    zIndex: 10,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.text,
  },

  dropdown: {
    position: 'absolute',
    top: 50,
    right: 0,

    backgroundColor: '#fff',
    borderRadius: 14,

    width: 110,

    paddingVertical: 8,

    // shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // Android
    elevation: 6,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    gap: 6,
    borderBottomWidth:1,
    borderBottomColor:'#e6e0e0'
  },

  itemText: {
    fontSize: 14,
    color: COLORS.text,
  },

  activeItem: {
    color: '#3315df',
  },
});