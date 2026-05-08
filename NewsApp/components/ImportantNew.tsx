import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  item: {
    title: string;
    image: string;
    source?: { name?: string };
  };
  onSavePress?: () => void;
  onPress?: () => void;
};

export default function FeaturedNews({ item, onPress, onSavePress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.overlay} />

      <TouchableOpacity style={styles.icon} onPress={onSavePress}>
        <Ionicons name="bookmark-outline" size={22} color="#fff" />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        {item.source?.name && (
          <Text style={styles.source}>{item.source.name}</Text>
        )}

        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 160,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 10,
    margin:10
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },

  textContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },

  source: {
    color: "#ddd",
    fontSize: 12,
    marginBottom: 5,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});