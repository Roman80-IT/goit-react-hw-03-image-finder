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
      this.setState({ images: images });
    } catch (error) {}
  };

  componentDidMount() {
    this.fetchAllImages();
  }

  render() {
    return (
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
        <ul class="gallery">
          {this.state.images.map(img => {
            return (
              <li class="gallery-item" key={img.id}>
                <img src={img.pageURL} alt={img.tags} />
              </li>
            );
          })}
        </ul>
        React homework template
      </div>
    );
  }
}
