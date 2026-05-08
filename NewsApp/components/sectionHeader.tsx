import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  actionText?: string;
  onPressAction?: () => void;
};

export default function SectionHeader({
  title,
  actionText = "See all",
  onPressAction,
}: Props) {
  return (
    <View style={styles.container}>
      
      {/* LEFT TITLE */}
      <Text style={styles.title}>{title}</Text>

      {/* RIGHT ACTION */}
      <TouchableOpacity onPress={onPressAction}>
        <Text style={styles.action}>{actionText} &gt;</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal:18
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },

  action: {
    fontSize: 13,
    color: "#4e44d8",
  },
});