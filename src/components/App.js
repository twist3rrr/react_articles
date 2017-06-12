import React, {Component} from 'react';
import Articles from './Articles';
import axios from 'axios';

class App extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                this.setState({
                    articles: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {

        return (
            <Articles articles={this.state.articles} />
        );
    };

}

export default App;