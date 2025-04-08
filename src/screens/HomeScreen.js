import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    // Update date every minute
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Format date to display
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Date</Text>
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  dateText: {
    fontSize: 36,
    fontWeight: '500',
    textAlign: 'center',
    color: '#0066cc',
  },
});

export default HomeScreen;