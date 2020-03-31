import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar'; 
import ImageList from './ImageList'; 

class App extends React.Component {

    state = { images : [] };

    render (){
        return(
            <div className="ui container" style={{ marginTop:'10px' }}>
                <SearchBar onFormSubmit = { this.onSearchSubmit } />
                <ImageList images={this.state.images}/>
            </div>
        );
    };

    onSearchSubmit = async (term) => {
        const response = 
            await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }
}

export default App;