import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 24,
      backgroundColor: '#fff',
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 16,
    },
    name: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 4,
    },
    email: {
      fontSize: 16,
      color: '#666',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
  export default styles;