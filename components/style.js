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
        width: 600,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        margin: 5,
        borderStyle: "solid",
        borderColor: "darkslategray",
        backgroundColor: "lightgray"
      },
      column: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 5
      },
});

export default styles;