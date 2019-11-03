import React from 'react';
import './index.css'

const Intro = (props) => (
    <div className="intro-container">
        <p className="intro">
            {props.message}
        </p>
    </div>
  )

export default Intro;