import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-26&sortBy=publishedAt&apiKey=${process.env.REACT_APP__API}`
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.props.items.map((item) => {
            return <NewSingle key={item.url} item={item} />
        });
    }
    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
    }
}

export default News;