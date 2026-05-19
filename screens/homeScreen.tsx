import DashboardCard from '@/components/DashboardCard';
import DashboardChart from '@/components/DashboardChart';
import Header from '@/components/header';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <DashboardCard />
        <DashboardChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  content: {
    marginBottom: 100,
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
});

