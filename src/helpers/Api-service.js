import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39409581-90aaf96fc057cbb581f460bc3'

export const fetchImages = async (searchQuery, page) => {
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
    return await response.data.hits;
}