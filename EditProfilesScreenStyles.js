import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 8,
    },
    input: {
      height: 48,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 20,
    },
    saveButton: {
      marginTop: 20,
      backgroundColor: '#007bff',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    saveText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default styles;