import React, {useState, useEffect} from 'react';
import { TextSection } from '../common/TextSection';
import CardComponent from '../common/CardComponent';

function App() {
    return (
        <React.Fragment>
            <TextSection id="welcome" />
            <TextSection id="blog_post" />
            <TextSection id="kitchen_sink" />
        </React.Fragment>
    );
}

export default App;
