import { Component } from 'react';
import { fetchImages, findImagesByTag } from './services/api';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    searchedImages: null,
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

  // Метод для запиту:
  fetchImagesByQuery = async () => {
    try {
      this.setState({ isLoading: true });

      const imagesShow = await findImagesByTag(this.state.searchedImages);

      this.setState({ images: imagesShow });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchAllImages();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchedImages !== this.state.searchedImages) {
      this.fetchImagesByQuery();
    }
  }

  handleSearchSubmit = event => {
    event.preventDefault();

    const searchedImages = event.currentTarget.elements.searchImg.value;
    // console.log('searchedImages: ', searchedImages);

    this.setState({ searchedImages: searchedImages });

    // Очищення поля введення форми:
    event.currentTarget.reset();
  };

  render() {
    const showImg =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        <header class="searchbar">
          <form class="form" onSubmit={this.handleSearchSubmit}>
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              name="searchImg"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>

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
