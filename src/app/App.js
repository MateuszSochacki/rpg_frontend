import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import BookCover from '../component/book/BookCover';
import Mutations from '../component/book/books/Mutations'
import Equipment from '../component/book/books/equipment/Equipment'
import Ability from "../component/book/books/Ability";
import './App.css';
import Skills from "../component/book/books/Skills";
import Spells from "../component/book/books/Spells";
import Beasts from "../component/book/books/Beasts";

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                {/*
                    App.js dostal swoj folder *SadPepe*
                */}

                <BookCover>
                    <Route path="/mutation" component={Mutations}/>
                    {/*<Route path="/bestiary" component={Mutations}/>*/}
                    <Route path="/equipment" component={Equipment}/>
                    <Route path="/ability" component={Ability}/>
                    <Route path="/skill" component={Skills}/>
                    <Route path="/spell" component={Spells}/>
                    <Route path="/beast" component={Beasts}/>
                </BookCover>

            </BrowserRouter>
        </div>
    );
}

export default App;
