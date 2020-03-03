import React, { Component } from 'react';
import { Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import axios from "axios";
import NoBooks from '../components/NoBooks';
import DeleteBtn from '../components/DeleteBtn';
import { toast } from 'react-toastify';
import "./style.css"

class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err.response)))
  }

  deleteFromDB = id => {
    console.log(id);

    axios.delete(`/api/books/${id}`)
      .then( () => {
        toast.error('Book Deleted');
        this.getBooks();
        
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <List>
                {this.state.savedBooks.map((book, key) => {
                  console.log(book)
                  return (
                    <div key={book._id}>
                      <ListItem
                        key={book._id}
                        authors={book.author}
                        title={book.title}
                        description={book.description}
                        link={book.link}
                        thumbnail={book.thumbnail}
                      
                      />
                      <DeleteBtn
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  )

                })}
              </List>
              :
              <NoBooks />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;