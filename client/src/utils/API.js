import axios from 'axios';

export default {

  getBooks: () => {
    return axios.get('/api/books');
  },

  getBook: (id) => {
    return axios.get(`/api/books/${id}`);
  },

  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  },

  saveBook: (bookData) => {
    return axios.post('/api/books', bookData);
  },
  getTitles: (bookTitle) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
  }
};
