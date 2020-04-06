import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:2000';

class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "",
            isFetching: false
        }
    }

    componentDidMount() {
        this.setState({ isFetching: true })
        axios.get('/testAPI').then((response) => {
            console.log(response.data)
            this.setState({
                data: response.data,
                isFetching: false
            })
        }).catch(e => {
            console.log('error')
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.isFetching ? 'fetching' : this.state.data}</h1>
                <h1>hello</h1>
            </div>
        )
    }
}

export default Test