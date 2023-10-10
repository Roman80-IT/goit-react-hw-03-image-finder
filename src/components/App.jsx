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
      this.setState({ isLoading: true });

      const images = await fetchImages();

      // console.log(images);

      this.setState({ images: images });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
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
          {this.state.isLoading && (
            <div>
              <p>Loading...</p>
            </div>
          )}
          {this.state.error && <p>{this.state.error}</p>}
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
