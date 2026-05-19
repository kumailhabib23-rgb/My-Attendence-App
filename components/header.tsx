import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.headerContainer}>
        <Text style={styles.appName}>
          My Attendance
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },

  /* ================= HEADER ================= */

  headerContainer: {
    backgroundColor: '#2563EB',

    paddingVertical: 28,
    paddingHorizontal: 24,

    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,

    justifyContent: 'center',

    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,

    elevation: 10,
  },

  appName: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});