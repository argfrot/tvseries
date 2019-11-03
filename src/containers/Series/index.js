import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series: []
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/search/shows?q=LEGO")
            .then(response => response.json())
            .then(json => this.setState({ series: json }));
    }

    render() {
        return (
            <div>
                {/* <p>Results: {this.state.series.length}</p> */}
                <SeriesList list={this.state.series}/>
            </div>
        )
    }

}

export default Series;