import css from './Button.module.css'

export const Button = ({ onClick }) => {
    return (
        <div className={css.loadMoreContainer}>
           <button type='button' className={css.LoadMoreBtn} onClick={onClick}>Load more</button>  
        </div>
       
    )
}