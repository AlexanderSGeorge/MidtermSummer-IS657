import React, { useState } from 'react';
import {Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";

import styles from "./components/style";
import Calculation from "./components/calculation";
import Box from "./components/box";

//import Box from "./box";

export default function App() {
    return (
        <View style={styles.container}>
        <Box>
           <Calculation>

           </Calculation>
        </Box>
        <StatusBar style="auto" />
        </View>
    );
}

