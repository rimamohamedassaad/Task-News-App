import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  item: {
    title: string;
    description?: string;
    image?: string;
    source?: { name?: string };
  };
  onPress?: () => void;
  onSavePress?: () => void;
};

export default function NewsItem({ item, onPress, onSavePress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      
      {/* IMAGE (LEFT) */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* TEXT (MIDDLE) */}
      <View style={styles.content}>
        <Text style={styles.source}>{item.source?.name}</Text>

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.desc} numberOfLines={2}>
          {item.description}
        </Text>
      </View>

      {/* SAVE ICON (RIGHT) */}
      <TouchableOpacity onPress={onSavePress} style={styles.icon}>
        <Ionicons name="bookmark-outline" size={20} color="#333" />
      </TouchableOpacity>

    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    marginHorizontal:10
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  content: {
    flex: 1,
    paddingHorizontal: 10,
  },

  source: {
    fontSize: 11,
    color: "#888",
    marginBottom: 2,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111",
  },

  desc: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },

  icon: {
    padding: 6,
  },
});