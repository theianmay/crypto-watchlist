import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface AppHeaderProps {
  children: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ children }) => {
  return (
    <Text style={styles.header}>
      {children}
    </Text>
  );
}


const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 32,
  }
})

export default AppHeader;