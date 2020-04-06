import React, { Component } from 'react'

class News extends Component {

    componentDidMount() {
        document.title = "News"
    }

    render() {
        return (
            <div>
                <h1>News</h1>
            </div>
        )
    }
}

export default News