import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ image, handleClick }) => {
    return (
        <li className={css.imgGalleryItem}>
            <img
        className={css.image}
        src={image.webformatURL}
        alt={image.tags}
        width="350"
        height="214"
        onClick={() => handleClick(image.largeImageURL)}
        
        ></img>
    </li>
    )
    
   
}

