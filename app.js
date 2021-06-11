import React, { useState } from 'react';
import {Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";

import styles from "./style";
import Calculation from "./calculation";
import Box from "./box";


//import Box from "./box";

export default function App() {
    return (
        <View style={styles.container}>
            <Box>
                Midterm Exam  
            </Box>
           <Calculation>
           </Calculation>
        <StatusBar style="auto" />
        </View>
    );
}

