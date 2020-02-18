import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import BookCover from './component/book/BookCover';
import Mutations from './component/book/books/Mutations'
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <BookCover>
                    <Route path="/mutation" component={Mutations}/>
                    {/*<Route path="/bestiary" component={Mutations}/>*/}
                    {/*<Route path="/equipment" component={Mutations}/>*/}
                    {/*<Route path="/mutation" component={Mutations}/>*/}
                </BookCover>

            </BrowserRouter>
        </div>
    );
}

export default App;
