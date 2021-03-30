import React from 'react';
import { Text } from 'react-native';
import Card from './Card';


const AlbumDetail = (props) => {
    return (
        <Card>
            <Text>{props.album.Title}</Text>
        </Card>
    );
};

export default AlbumDetail;
