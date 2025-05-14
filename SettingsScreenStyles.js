import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    item: {
      paddingVertical: 16,
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      fontSize: 18,
    },
    logoutButton: {
      marginTop: 40,
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    logoutText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  export default styles;