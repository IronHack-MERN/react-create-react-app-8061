import React from 'react';

const Title = (props) => {
    const {data} = props;

    return(
        <title className="App-header">
            <h2>{data} no me jorobes</h2>
        </title>
    );
}

export default Title;