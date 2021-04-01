import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { Title, Artista, thumbnail_image, imagen, url } = album;
    
    return (
        <Card>
            <CardSection>
                <View style={styles.imgContainer}>
                    <Image 
                        style={styles.imgStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContainer}>
                <Text style={styles.titleStyle}>{Title}</Text>
                <Text>{Artista}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={styles.imagStyle}
                    source={{ uri: imagen }} 
                />
            </CardSection>
            <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy Now
                    </Button>
               </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleStyle: {
        fontSize: 18
    },
    imgStyle: {
        width: 50,
        height: 50
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imagStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
