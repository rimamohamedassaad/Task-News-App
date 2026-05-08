import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Ionicons }
from '@expo/vector-icons';

import { COLORS } from '../components/themes/theme';

export default function Header() {

  return (
    <View style={styles.container}>

      {/* LEFT SIDE */}
      <View style={styles.leftContainer}>

        <Image
          source={require('@/assets/images/Newss.png')}
          style={styles.logo}
        />

        <View>

          <Text style={styles.title}>
           GNews
          </Text>

          <Text style={styles.subtitle}>
            Stay updated daily
          </Text>

        </View>

      </View>

      {/* RIGHT SIDE */}
      <View style={styles.rightContainer}>

        {/* Notification */}
        <TouchableOpacity
          style={styles.notificationBtn}
        >

          <Ionicons
            name="notifications-outline"
            size={24}
            color={COLORS.text}
          />

          {/* Red dot */}
          <View style={styles.dot} />

        </TouchableOpacity>

        {/* Profile */}
        <Image
          source={require('@/assets/images/me.jpeg')}
          style={styles.profile}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 10,
    marginBottom: 15,
    // paddingHorizontal: 16,
    // paddingVertical: 14,

    // backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 55,
    height: 55,
    borderRadius: 15,
    marginRight: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 13,
    color: COLORS.subText,
    marginTop: 2,
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  notificationBtn: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: COLORS.white,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  dot: {
    position: 'absolute',
    top: 10,
    right: 11,

    width: 8,
    height: 8,

    borderRadius: 10,
    backgroundColor: '#EF4444',
  },

  profile: {
    width: 45,
    height: 45,
    borderRadius: 14,
  },
});