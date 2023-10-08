import { Component } from 'react';
import { fetchImages } from './services/api';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  fetchAllImages = async () => {
    try {
      const images = await fetchImages();
      console.log(images);
    } catch (error) {}
  };

  componentDidMount() {
    this.fetchAllImages();
  }

  return() {
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>;
  }
}
