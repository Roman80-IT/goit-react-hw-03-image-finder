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
    const showImg =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        <div>
          <ul class="gallery">
            {showImg &&
              this.state.images.map(img => {
                return (
                  <li class="gallery-item" key={img.id}>
                    <img src={img.previewURL} alt={img.tags} />
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}
