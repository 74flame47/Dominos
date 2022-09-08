import React, { useState } from 'react';
import '../css/search.css';



const Search = () => {
    const [input1, input1Change] = useState({
        value: 3
    });

    const [input2, input2Change] = useState({
        value: 4
    });

    

    return (<div className="search">
                <input type="number"  max="6" min="0" />/
                <input type="number"  max="6" min="0"/>
                <button>Search</button>
            </div>)
}


export default Search;