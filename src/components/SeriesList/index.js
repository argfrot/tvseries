import React from 'react';
import './index.css';

const SeriesListItem = ({ series }) => {
    console.log(series.show);
    return (
        <li>
            <a href={series.show.url}><img src={series.show.image.medium} alt={series.show.name}></img></a>
        </li>
    )
}

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem key={series.show.id} series={series} />
                ))}
            </ul>
        </div>
    );
}

export default SeriesList;
