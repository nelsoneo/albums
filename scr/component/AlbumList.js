import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
state = { albums: [] };

    componentDidMount() {
        axios.get('http://6878c0c71993.ngrok.io/Album')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
     return this.state.albums.map(album => 
     <AlbumDetail key={album.Title} album={album} />
     ); 
    }

    render() {
      console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
