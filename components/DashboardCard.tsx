import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Dashboard Overview</Text>

        <View style={styles.cardContainer}>
          {/* Total Students */}
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: '#E8F1FF' }]}>
              <Text style={[styles.icon, { color: '#1E73D8' }]}>👥</Text>
            </View>

            <Text style={[styles.number, { color: '#1E73D8' }]}>248</Text>

            <Text style={styles.label}>Total Students</Text>
          </View>

          {/* Present Today */}
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: '#EAF6EC' }]}>
              <Text style={[styles.icon, { color: '#2E7D32' }]}>✓</Text>
            </View>

            <Text style={[styles.number, { color: '#2E7D32' }]}>215</Text>

            <Text style={styles.label}>Present Today</Text>
          </View>

          {/* Absent Today */}
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: '#FCEBEC' }]}>
              <Text style={[styles.icon, { color: '#D32F2F' }]}>✕</Text>
            </View>

            <Text style={[styles.number, { color: '#D32F2F' }]}>33</Text>

            <Text style={styles.label}>Absent Today</Text>
          </View>

          {/* Attendance Rate */}
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Text style={[styles.icon, { color: '#EF6C00' }]}>↗</Text>
            </View>

            <Text style={[styles.number, { color: '#EF6C00' }]}>
              86.7%
            </Text>

            <Text style={styles.label}>Attendance Rate</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  heading: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  icon: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  number: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 8,
  },

  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
});