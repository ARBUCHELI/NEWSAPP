import React, { Component } from 'react';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    sidenews: data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true,
                })
            })
    }

    renderItems() {
        if(!this.state.error) {
            return this.state.sidenews.map((item) => {
                return <SingleSide key={item.url} item={item} />
            });
        } else {
            return <Error />
        } 
    }
    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
    }
}

export default Sidenews;