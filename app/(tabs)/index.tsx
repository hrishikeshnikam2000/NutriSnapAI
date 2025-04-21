import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>NutriSnap AI</Text>
          <Text style={styles.subtitle}>Your AI-Powered Nutrition Assistant</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1,850</Text>
            <Text style={styles.statLabel}>Daily Goal (cal)</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1,200</Text>
            <Text style={styles.statLabel}>Consumed (cal)</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>650</Text>
            <Text style={styles.statLabel}>Remaining (cal)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Meals</Text>
          <View style={styles.mealCard}>
            <Text style={styles.mealTitle}>Breakfast</Text>
            <Text style={styles.mealCalories}>320 calories</Text>
          </View>
          <View style={styles.mealCard}>
            <Text style={styles.mealTitle}>Lunch</Text>
            <Text style={styles.mealCalories}>580 calories</Text>
          </View>
          <View style={styles.mealCard}>
            <Text style={styles.mealTitle}>Dinner</Text>
            <Text style={styles.mealCalories}>300 calories</Text>
          </View>
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
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '31%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  mealCard: {
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
  mealTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  mealCalories: {
    fontSize: 14,
    color: '#666',
  },
});