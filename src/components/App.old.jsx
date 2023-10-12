// import { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { fetchImages } from './api';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
// import { Modal } from 'components/Modal/Modal';

// export class App extends Component {
//   state = {
//     text: '',
//     images: [],
//     loading: false,
//     page: 1,
//     showModal: false,
//   };

//   submitSearchBar = evt => {
//     evt.preventDefault();
//     this.setState({
//       text: `${Date.now()}/${evt.currentTarget.lastElementChild.value}`,
//       images: [],
//       page: 1,
    //   largeImg: '',
//     });
//   };

//   buttonLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevState.text !== this.state.text
//     ) {
//       try {
//         localStorage.setItem('currentText', this.state.text.split('/').pop());
//         localStorage.setItem('currentPage', this.state.page);
//         this.setState({ loading: true });
//         const imgs = await fetchImages();
//         if (this.state.page === 1) {
//           this.setState({ images: imgs.hits });
//         } else {
//           this.setState(prevState => ({
//             images: [...prevState.images, ...imgs.hits],
//           }));
//         }
//       } catch (error) {
//         console.log('ERROR');
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   }

//   onOpenModal = img => {
    // this.setState({ largeImg: img });
//     this.setState({ showModal: true });

//     window.addEventListener('click', this.onCloseModal);
//   };

//   onCloseModal = e => {
//     if (
//       e.target.className ===
//       'ReactModal__Content ReactModal__Content--after-open sc-qZruQ cHdZzS'
//     ) {
//       window.removeEventListener('click', this.onOverlayClick);
    //   this.setState({ showModal: false, largeImg: '' });
//     }
//   };

//   render() {
//     return (
//       <Layout>
//         <GlobalStyle />
//         <Searchbar onSubmitSearchBar={this.submitSearchBar} />
//         {this.state.images.length > 0 && (
//           <ImageGallery
//             images={this.state.images}
//             openModal={this.onOpenModal}
//           />
//         )}
//         {this.state.images.length > 0 && (
//           <Button loadMore={this.buttonLoadMore} />
//         )}
//         {this.state.loading && <Loader />}
//         <Modal
//           isOpen={this.state.showModal}
//           onClick={this.onCloseModal}
//           onRequestClose={this.onCloseModal}
//           largeImg={this.state.largeImg}
//         />
//       </Layout>
//     );
//   }
// }
