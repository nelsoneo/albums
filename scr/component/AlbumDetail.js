import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { Title, Artista, thumbnail_image } = album;
    
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style={styles.imgStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContainer}>
                <Text>{Title}</Text>
                <Text>{Artista}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imgStyle: {
        width: 50,
        height: 50
    }
});

export default AlbumDetail;
