// PERFECT MOBILE UI ALIGNMENT

import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

type ClassName = 'Class 10-A' | 'Class 10-B' | 'Class 9-A';

type Student = {
  id: string;
  name: string;
  status: 'Present' | 'Absent';
};

const AttendanceScreen = () => {
  const classData: Record<ClassName, Student[]> = {
    'Class 10-A': [
      { id: '001', name: 'Alice Johnson', status: 'Absent' },
      { id: '002', name: 'Bob Smith', status: 'Present' },
      { id: '003', name: 'Charlie Brown', status: 'Absent' },
      { id: '004', name: 'Diana Prince', status: 'Present' },
    ],

    'Class 10-B': [
      { id: '005', name: 'Ethan Hunt', status: 'Present' },
      { id: '006', name: 'Fiona Apple', status: 'Absent' },
      { id: '007', name: 'John Wick', status: 'Present' },
    ],

    'Class 9-A': [
      { id: '008', name: 'Tony Stark', status: 'Absent' },
      { id: '009', name: 'Peter Parker', status: 'Present' },
      { id: '010', name: 'Bruce Wayne', status: 'Absent' },
    ],
  };

  const [selectedClass, setSelectedClass] =
    useState<ClassName>('Class 10-A');

  const [students, setStudents] = useState<Student[]>(
    classData['Class 10-A']
  );

  // Change Class
  const changeClass = (value: ClassName) => {
    setSelectedClass(value);
    setStudents(classData[value]);
  };

  // Update Attendance
  const updateStatus = (id: string, status: Student['status']) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, status }
        : student
    );

    setStudents(updatedStudents);
  };

  // Count
  const presentCount = students.filter(
    (item) => item.status === 'Present'
  ).length;

  const absentCount = students.filter(
    (item) => item.status === 'Absent'
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#4F46E5"
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Mark Attendance
          </Text>

          <Text style={styles.headerSubTitle}>
            Manage student attendance
          </Text>
        </View> */}

        {/* TOP CARD */}
        <View style={styles.topCard}>
          <Text style={styles.label}>Select Class</Text>

          {/* DROPDOWN */}
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedClass}
              onValueChange={(itemValue) =>
                changeClass(itemValue as ClassName)
              }
              style={styles.picker}
            >
              <Picker.Item
                label="Class 10-A"
                value="Class 10-A"
              />

              <Picker.Item
                label="Class 10-B"
                value="Class 10-B"
              />

              <Picker.Item
                label="Class 9-A"
                value="Class 9-A"
              />
            </Picker>
          </View>

          {/* COUNT CARDS */}
          <View style={styles.countRow}>
            <View
              style={[
                styles.countCard,
                { backgroundColor: '#16A34A' },
              ]}
            >
              <Text style={styles.countNumber}>
                {presentCount}
              </Text>

              <Text style={styles.countLabel}>
                Present
              </Text>
            </View>

            <View
              style={[
                styles.countCard,
                { backgroundColor: '#DC2626' },
              ]}
            >
              <Text style={styles.countNumber}>
                {absentCount}
              </Text>

              <Text style={styles.countLabel}>
                Absent
              </Text>
            </View>
          </View>
        </View>

        {/* STUDENTS LIST */}
        <FlatList
          data={students}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          renderItem={({ item }) => (
            <View style={styles.studentCard}>
              {/* TOP SECTION */}
              <View style={styles.studentTopRow}>
                <View style={styles.studentInfo}>
                  <Text style={styles.rollNo}>
                    Roll No. {item.id}
                  </Text>

                  <Text style={styles.studentName}>
                    {item.name}
                  </Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor:
                        item.status === 'Present'
                          ? '#16A34A'
                          : '#DC2626',
                    },
                  ]}
                >
                  <Text style={styles.statusText}>
                    {item.status}
                  </Text>
                </View>
              </View>

              {/* BUTTONS */}
              <View style={styles.buttonRow}>
                {/* PRESENT */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.presentBtn,
                    item.status === 'Present' && {
                      backgroundColor: '#16A34A',
                    },
                  ]}
                  onPress={() =>
                    updateStatus(item.id, 'Present')
                  }
                >
                  <Text
                    style={[
                      styles.presentBtnText,
                      item.status === 'Present' && {
                        color: '#fff',
                      },
                    ]}
                  >
                    PRESENT
                  </Text>
                </TouchableOpacity>

                {/* ABSENT */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.absentBtn,
                    item.status === 'Absent' && {
                      backgroundColor: '#DC2626',
                    },
                  ]}
                  onPress={() =>
                    updateStatus(item.id, 'Absent')
                  }
                >
                  <Text
                    style={[
                      styles.absentBtnText,
                      item.status === 'Absent' && {
                        color: '#fff',
                      },
                    ]}
                  >
                    ABSENT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },

  // HEADER
  header: {
    backgroundColor: '#4F46E5',
    paddingTop: 24,
    paddingBottom: 34,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  headerSubTitle: {
    fontSize: 14,
    color: '#E0E7FF',
    marginTop: 4,
  },

  // TOP CARD
  topCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 24,
    padding: 18,

    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },

  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FAFAFA',
  },

  picker: {
    height: 58,
    width: '100%',
  },

  // COUNT
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  countCard: {
    width: '48%',
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: 'center',
  },

  countNumber: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },

  countLabel: {
    marginTop: 6,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },

  // STUDENT CARD
  studentCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 22,
    padding: 16,

    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
  },

  studentTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  studentInfo: {
    flex: 1,
    paddingRight: 10,
  },

  rollNo: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },

  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  // STATUS
  statusBadge: {
    minWidth: 90,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  // BUTTONS
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  presentBtn: {
    flex: 1,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#16A34A',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: '#fff',
  },

  absentBtn: {
    flex: 1,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#DC2626',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    backgroundColor: '#fff',
  },

  presentBtnText: {
    color: '#16A34A',
    fontWeight: '700',
    fontSize: 14,
  },

  absentBtnText: {
    color: '#DC2626',
    fontWeight: '700',
    fontSize: 14,
  },
});