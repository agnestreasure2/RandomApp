import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
            <Text style={styles.HeaderText}>
                {props.name}
            </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Header: {
        marginLeft: 15,
    },
    HeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
    },

})
export default Header;