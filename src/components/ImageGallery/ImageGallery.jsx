import css from './ImageGallery.module.css'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images, handleClick }) => {
    return (
        <ul className={css.imgGallery}>
        {images.map(image => (
            <ImageGalleryItem
                key={image.id}
                image={image}
                handleClick={handleClick}
            />
    ))}
    </ul>
    )
   
}