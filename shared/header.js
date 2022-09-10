
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";



const Header =  () => {
    
    
    const navigation = useNavigation();


    return (
        <View style={styles.header}>
            <View style={styles.headerText}>
            <Text >Home</Text>
            
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    
        height: 70
        
    },
    headerText: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        fontSize: 15,
        flex: 1
    },

})

export default Header