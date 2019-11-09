import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';

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
                <Intro message="I love TV! And something a bit longer."/>
                {/* <p>Results: {this.state.series.length}</p> */}
                <SeriesList list={this.state.series}/>
            </div>
        )
    }

}

export default Series;