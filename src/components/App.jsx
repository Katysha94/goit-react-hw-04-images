import { useEffect, useState } from 'react';
import {fetchImages} from '../helpers/Api-service'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader}  from './Loader/Loader'
import { toast } from 'react-toastify';
import { Modal } from "./Modal/Modal";

export const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  
  useEffect(() => {

    const loadImages = async (searchQuery, page) => {
    setIsLoading(true);
    try {
  
      const response = await fetchImages(searchQuery, page);
      if (response.length === 0) {
        setIsLoadMore(false)
        return toast.error("Sory, There are no images matching your request", { theme: "colored" })
        
  
      } else {
        setImages(prevState => [...prevState, ...response]);
        setIsLoadMore(response.length > 0);
        setError(null);
        
      }

      
  
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
   
    
    }

    if (searchQuery !== '') {
      loadImages(searchQuery,  page)
    }
      
    
    
  },[searchQuery, page])
  

  
  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([])
    

  }

  const handleLoadMore = () => {
    setPage(page => page + 1);
    setIsLoading(true)

  }

  const openModal = largeImageURL => {
    setShowModal(true);
    setModalImage(largeImageURL);
  }

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  }
 
 
    return (
    <div
      style={{
        display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
      }}
    >
        <Searchbar
          onSubmit={handleSearch} />
        <ImageGallery
          images={images}
          handleClick={openModal} />
        {isLoading && < Loader />}
      {isLoadMore && (
  <Button onClick={handleLoadMore} />
        )}
         {error && toast.error(`${error.message}`)}
         {showModal && (
          <Modal
            closeModal={closeModal}
            imageUrl={modalImage}
          />)}
        <ToastContainer
          autoClose={3000}
        />
    </div>
  );
  }
  
