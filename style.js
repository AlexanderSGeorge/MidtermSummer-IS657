import { StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 1,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
          ios: { paddingTop: 20 },
          android: { paddingTop: StatusBar.currentHeight }
        })
      },
      box: {
        height: 400,
        width: 400,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "lightblue"
      },
      boxText: {
        fontSize: 30,
        color: "#FFFFFF",
      },
});

export default styles;