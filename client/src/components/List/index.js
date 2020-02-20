import React, { Component } from "react"
import "./style.css"
import {Col, Row, Container } from '../Grid/index'
import ImageDiv from "../ImageDiv"

export function List({ children }) {
    return (
    <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
    </div>
    );
}

export class ListItem extends Component {
    render() {
        console.log(this.props)
    return (
    
    <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <ImageDiv src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span><h5>{this.props.authors}</h5></span></h3>
              <p>
                {this.props.description}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                Go to book!
              </a>
              
            </Col>
          </Row>
        </Container>
      </li>
    )
    }
}