import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingTop: 30,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 30,
    },
    newsItem: {
      padding: 16,
      marginBottom: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 3,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: '#fff',
      marginBottom: 6,
    },
    description: {
      fontSize: 16,
      color: '#fff',
      lineHeight: 22,
    },
  });
  







export default styles;