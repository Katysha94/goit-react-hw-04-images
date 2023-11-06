import css from './Searchbar.module.css'
import { useState } from 'react';
import { toast } from 'react-toastify';


export const Searchbar = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (value.trim() === '') {
           return toast.error("Please, enter your request!", {theme: "colored"});
            
        }
        onSubmit(value)
        setValue('');
    }

    const handleInputChange = (evt) => {
        setValue(evt.target.value);
    }
        
    
        return (
    <header className={css.searchbar}>
     <form
        className={css.searchbarForm}
        onSubmit={handleSubmit}>
    <button
        type="submit"
        className={css.searchBtn}>
      <span className={css.searchBtnLabel}>Search</span>
    </button>

    <input
        className={css.searchbarInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={handleInputChange}                
    />
  </form>
</header>
       )
   }

    
    




