import { Component } from 'react';

import { PER_PAGE, getImages } from './services/api';

import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Layout } from './Layout/Layout.styled';
import { Modal } from './Modal/Modal';
import { Message } from './Message/Message';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    image: [],
    totalImage: 0,
    page: 1,
    selectedImageUrl: '',
    load: false,
    error: false,
    loadMore: true,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    try {
      this.setState({ load: true, error: false });

      const response = await getImages(this.state.query, this.state.page);

      this.setState(prevState => ({
        image: [...prevState.image, ...response.data.hits],
        totalImage: response.data.totalHits,
        loadMore:
          this.state.page < Math.ceil(response.data.totalHits / PER_PAGE),
      }));
    } catch (error) {
      // this.setState({ error: true });
      this.setState({ error: error.message });
    } finally {
      this.setState({ load: false });
    }
  };

  getQuery = e => {
    e.preventDefault();

    const searchedImages = e.currentTarget.elements.query.value;

    this.setState({
      query: `${Date.now()}/${searchedImages}`,
      page: 1,
      image: [],
      totalImage: 0,
    });
    e.currentTarget.reset();
  };

  onBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getImageForModal = url => {
    this.setState({ selectedImageUrl: url });
  };

  onModalClose = () => {
    this.setState({ selectedImageUrl: '' });
  };

  render() {
    const showImg = Array.isArray(this.state.image) && this.state.image.length;
    // const queryIsNull = this.state.query === null;
    // const imageIsNull = this.state.image === null;

    // if (queryIsNull || imageIsNull) {
    //   return null; // або повернути якийсь інший заглушковий контент
    // }

    // if (this.state.query === null || this.state.image === null)

    return (
      <Layout>
        <Searchbar onSubmit={this.getQuery}></Searchbar>
        {showImg && (
          <ImageGallery
            image={this.state.image}
            onImageClick={this.getImageForModal}
          ></ImageGallery>
        )}

        {this.state.load && <Loader></Loader>}

        {/* {this.state.image.length !== 0 &&
          this.state.totalImage > PER_PAGE * this.state.page && (
            <Button onClick={this.onBtnClick}></Button>
          )} */}

        {this.state.image.length !== 0 && this.state.loadMore && (
          <Button onClick={this.onBtnClick}></Button>
        )}

        <Message
          error={this.state.error}
          empty={
            this.state.image.length === 0 &&
            this.state.query !== '' &&
            !this.state.load
          }
        ></Message>
        <Modal
          url={this.state.selectedImageUrl}
          query={this.state.query}
          onModalClose={this.onModalClose}
        ></Modal>
        <GlobalStyle></GlobalStyle>
      </Layout>
    );
  }
}
