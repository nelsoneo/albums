import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => (
        <View>
            <Text style={styles.textHead}>Albums</Text>    
        </View>
    );

const styles = StyleSheet.create({
    textHead: {
        fontSize: 10
    }
});

export default Header;
