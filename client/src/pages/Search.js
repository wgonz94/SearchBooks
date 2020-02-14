import React, { Component, useState } from "react";
import axios from "axios";
import { Row, Col } from "../components/Grid";
import {List, ListItem} from "../components/List";
import NoBooks from "../components/NoBooks";
import SaveBtn from "../components/SaveBtn"


class Search extends Component {
    state = {
        query: "",
        books: []
    };

    displayResults = data => {
        this.setState({ books: data.items })
    };

    searchBooks = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${ this.state.query}`;

        axios
            .get(url)
            .then(res => {
                console.log(res.data.items)
                this.displayResults(res.data);
            })
            .catch(err => console.log(err))
    };

    handleEntry = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    };


    render() {
        return (
            <Row>
                <Col size="md-12">
                    <div>
                        <input type="text" name="query" onChange={this.handleEntry}/>
                        <button type="submit" onClick={this.searchBooks}>Search for Books</button>
                    
                    
                        {(this.state.books && this.state.books.length > 0 ) ?
                        <List>
                            {this.state.books.map(book => {
                                return(
                                    <div key={book.id}>
                                    <ListItem
                                    author={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                    title={book.volumeInfo.title}
                                    description={book.volumeInfo.description ? 
                                      book.volumeInfo.description : "No Description Available"}
                                    link={book.volumeInfo.infoLink}
                                    image={book.volumeInfo.imageLinks.thumbnail ? 
                                      book.volumeInfo.imageLinks.thumbnail: "#"}
                                    />

                                    <SaveBtn
                                    author={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                    title={book.volumeInfo.title}
                                    description={book.volumeInfo.description ? 
                                        book.volumeInfo.description : "No Description Available"}
                                    link={book.volumeInfo.infoLink}
                                    image={book.volumeInfo.imageLinks.thumbnail ? 
                                        book.volumeInfo.imageLinks.thumbnail : "#"}
                                    
                                    />
                                    </div>
                                    
                                )
                            })}

                        </List>
                        :
                        <NoBooks/>
                        }
                    </div>
                </Col>
            </Row>
        )
    }
}



export default Search;