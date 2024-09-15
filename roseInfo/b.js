import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Collapsible = ({ children, title, expandedTitle, collapsedTitle }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.title}>
        <Text style={styles.titleText}>
          {expanded ? expandedTitle : collapsedTitle}
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    padding: 10,
    backgroundColor: '#007BFF',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  content: {
    padding: 10,
    backgroundColor: '#FFFFE0',
  },
});

export default Collapsible;
