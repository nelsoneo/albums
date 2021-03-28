import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => <Text style={styles.textHead}>Albums</Text>; 

const styles = StyleSheet.create({
    textHead: {
        fontSize: 10
    }
});

export default Header;
