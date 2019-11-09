import React from 'react';
import Counter from '../../components/Counter';

const Counters = props => (
    <div>
        <Counter interval={1000} step={parseInt(props.match.params.id)}/>
        <Counter interval={2000} step={5}/>
    </div>
)

export default Counters;
