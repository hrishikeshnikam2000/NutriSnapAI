import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlansScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Your Plans</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Meal Plan</Text>
          <View style={styles.planCard}>
            <Text style={styles.mealTime}>Breakfast (8:00 AM)</Text>
            <Text style={styles.mealDescription}>Oatmeal with berries and honey</Text>
            <Text style={styles.mealCalories}>320 calories</Text>
          </View>
          <View style={styles.planCard}>
            <Text style={styles.mealTime}>Lunch (12:30 PM)</Text>
            <Text style={styles.mealDescription}>Grilled chicken salad</Text>
            <Text style={styles.mealCalories}>450 calories</Text>
          </View>
          <View style={styles.planCard}>
            <Text style={styles.mealTime}>Dinner (7:00 PM)</Text>
            <Text style={styles.mealDescription}>Salmon with quinoa and vegetables</Text>
            <Text style={styles.mealCalories}>550 calories</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workout Plan</Text>
          <TouchableOpacity style={styles.workoutCard}>
            <View>
              <Text style={styles.workoutTitle}>Morning Cardio</Text>
              <Text style={styles.workoutDescription}>30 min jogging</Text>
            </View>
            <Text style={styles.workoutTime}>7:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.workoutCard}>
            <View>
              <Text style={styles.workoutTitle}>Evening Strength</Text>
              <Text style={styles.workoutDescription}>45 min weight training</Text>
            </View>
            <Text style={styles.workoutTime}>6:00 PM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  planCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mealTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 4,
  },
  mealDescription: {
    fontSize: 14,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  mealCalories: {
    fontSize: 14,
    color: '#666',
  },
  workoutCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666',
  },
  workoutTime: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
});