import React, {Component} from "react";
import {FormBtn} from "../Form";
import axios from "axios";
import { toast } from 'react-toastify';

class SaveBtn extends Component{
 
    postToDB = (book) => {
        const dbBook = {
          title: book.title,
          author: book.authors,
          description: book.description,
          image: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
        .then( () => toast.success(`You added ${book.title} to your bookshelf`))
        .catch(err => console.log(err.response))
      }

    render() {
        return (
          <div>
          <FormBtn type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </FormBtn>
        </div>
        );
    }
  }

  export default SaveBtn;