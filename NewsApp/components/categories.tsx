import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function Categories({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {categories.map((item) => {
          const isActive = selected === item;

          return (
            <TouchableOpacity
              key={item}
              onPress={() => onSelect(item)}
              style={[styles.item, isActive && styles.activeItem]}
              activeOpacity={0.8}
            >
              <Text
                style={[styles.text, isActive && styles.activeText]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 6,
  },

  container: {
    paddingHorizontal: 8,
    alignItems: "center",
  },

  item: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
    marginRight: 6,
  },

  activeItem: {
    backgroundColor: "#4e44d8",
  },

  text: {
    fontSize: 10,
    color: "#555",
  },

  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});