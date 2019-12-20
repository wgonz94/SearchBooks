import axios from "axios";

export default {
    //Get all Books
    getBooks: function() {
        return axios.get("/api/books");
    },

    //Get Book with id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    //Delete Book with id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    //Save Book(s) to database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    }

};

