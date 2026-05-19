import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.headerContainer}>
      <Text style={styles.appName}>My Attendance</Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },    
  headerContainer: {
    backgroundColor: '#2563EB',

    // paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 20,

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
export default Header;