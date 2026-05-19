import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.headerCard}>
          <View style={styles.headerTopRow}>
            <View style={styles.headerLabel}>
              <Text style={styles.headerLabelText}>
                Attendance Overview
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <View style={styles.onlineDot} />
              <Text style={styles.statusText}>Online</Text>
            </View>
          </View>

          <Text style={styles.heading}>Dashboard</Text>

          <Text style={styles.subHeading}>
            Welcome back, time to check today’s attendance
            metrics and classroom status.
          </Text>
        </View>

        {/* Cards */}
        <View style={styles.cardContainer}>
          {/* Total Students */}
          <View style={[styles.card, styles.blueCard]}>
            <View style={[styles.iconBox, styles.blueIconBox]}>
              <MaterialCommunityIcons
                name="account-group"
                size={26}
                color="#2979FF"
              />
            </View>

            <Text style={[styles.number, { color: '#2979FF' }]}>
              248
            </Text>

            <Text style={styles.label}>Total Students</Text>
          </View>

          {/* Present */}
          <View style={[styles.card, styles.greenCard]}>
            <View style={[styles.iconBox, styles.greenIconBox]}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={26}
                color="#2EAF62"
              />
            </View>

            <Text style={[styles.number, { color: '#2EAF62' }]}>
              215
            </Text>

            <Text style={styles.label}>Present Today</Text>
          </View>

          {/* Absent */}
          <View style={[styles.card, styles.redCard]}>
            <View style={[styles.iconBox, styles.redIconBox]}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={26}
                color="#FF4D4F"
              />
            </View>

            <Text style={[styles.number, { color: '#FF4D4F' }]}>
              33
            </Text>

            <Text style={styles.label}>Absent Today</Text>
          </View>

          {/* Rate */}
          <View style={[styles.card, styles.orangeCard]}>
            <View style={[styles.iconBox, styles.orangeIconBox]}>
              <MaterialCommunityIcons
                name="chart-line"
                size={26}
                color="#FF9800"
              />
            </View>

            <Text style={[styles.number, { color: '#FF9800' }]}>
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
    backgroundColor: '#F4F7FC',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  /* ================= HEADER ================= */

  headerCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 28,

    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,

    shadowColor: '#0F172A',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.06,
    shadowRadius: 18,

    elevation: 8,
  },

  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 20,
  },

  headerLabel: {
    backgroundColor: '#EAF3FF',

    paddingVertical: 8,
    paddingHorizontal: 14,

    borderRadius: 999,
  },

  headerLabelText: {
    color: '#0B69A3',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#ECFDF3',

    paddingVertical: 7,
    paddingHorizontal: 14,

    borderRadius: 999,
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,

    backgroundColor: '#22C55E',
    marginRight: 6,
  },

  statusText: {
    color: '#15803D',
    fontSize: 12,
    fontWeight: '700',
  },

  heading: {
    fontSize: 34,
    fontWeight: '900',
    color: '#111827',

    marginBottom: 10,
  },

  subHeading: {
    fontSize: 15,
    lineHeight: 24,
    color: '#6B7280',
  },

  /* ================= CARDS ================= */

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    paddingHorizontal: 16,
    marginTop: 20,
  },

  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',

    borderRadius: 24,
    padding: 18,

    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },

  blueCard: {
    borderTopWidth: 5,
    borderTopColor: '#2979FF',
  },

  greenCard: {
    borderTopWidth: 5,
    borderTopColor: '#2EAF62',
  },

  redCard: {
    borderTopWidth: 5,
    borderTopColor: '#FF4D4F',
  },

  orangeCard: {
    borderTopWidth: 5,
    borderTopColor: '#FF9800',
  },

  iconBox: {
    width: 62,
    height: 62,

    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 16,
  },

  blueIconBox: {
    backgroundColor: '#EAF2FF',
  },

  greenIconBox: {
    backgroundColor: '#E9F8EE',
  },

  redIconBox: {
    backgroundColor: '#FFEDEE',
  },

  orangeIconBox: {
    backgroundColor: '#FFF4E8',
  },

  number: {
    fontSize: 30,
    fontWeight: '800',

    marginBottom: 6,
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
});