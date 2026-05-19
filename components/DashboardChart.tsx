import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const attendanceData = [
  {
    className: 'Class 10-A',
    present: 28,
    total: 32,
    percentage: 87.5,
    color: '#EF6C00',
  },
  {
    className: 'Class 10-B',
    present: 30,
    total: 31,
    percentage: 96.8,
    color: '#2E7D32',
  },
  {
    className: 'Class 9-A',
    present: 25,
    total: 30,
    percentage: 83.3,
    color: '#EF6C00',
  },
  {
    className: 'Class 9-B',
    present: 27,
    total: 29,
    percentage: 93.1,
    color: '#2E7D32',
  },
  {
    className: 'Class 8-A',
    present: 24,
    total: 28,
    percentage: 85.7,
    color: '#EF6C00',
  },
  {
    className: 'Class 8-B',
    present: 26,
    total: 30,
    percentage: 86.7,
    color: '#EF6C00',
  },
];

const AttendanceChart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
          <Text style={styles.heading}>
            Class-wise Attendance Today
          </Text>

          {attendanceData.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              {/* Top Row */}
              <View style={styles.row}>
                <Text style={styles.className}>
                  {item.className}
                </Text>

                <Text style={styles.stats}>
                  {item.present}/{item.total} (
                  {item.percentage}%)
                </Text>
              </View>

              {/* Progress Bar */}
              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
    </View>
  );
};

export default AttendanceChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    padding: 14,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 20,
  },

  itemContainer: {
    marginBottom: 24,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  className: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
  },

  stats: {
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
  },

  progressBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 20,
  },
});