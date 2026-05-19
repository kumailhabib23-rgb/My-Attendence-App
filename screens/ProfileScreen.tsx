import AttendanceScreen from '@/components/AttendenceClass';
import Header from '@/components/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
          <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
    
        <AttendanceScreen />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles =({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    paddingBottom: 90,
  },
  content: {
    marginBottom: 100,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
});
export default Profile;