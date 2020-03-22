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
import Professions from "../component/book/books/Professions";
import Login from "../component/book/login/Login";
import Register from "../component/book/login/Register";


function App() {
    return (
        <div className="App">
            <BrowserRouter>

                {/*
                    App.js dostal swoj folder *SadPepe*
                */}

                <BookCover>

                    {/*visible only if authenticated*/}

                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    {/*!TODO*/}
                    <Route path="/book/mutation" component={Mutations}/>
                    {/*<Route path="/bestiary" component={Mutations}/>*/}
                    <Route path="/book/equipment" component={Equipment}/>
                    <Route path="/book/ability" component={Ability}/>
                    <Route path="/book/skill" component={Skills}/>
                    <Route path="/book/spell" component={Spells}/>
                    <Route path="/book/beast" component={Beasts}/>
                    <Route path="/book/profession" component={Professions}/>

                </BookCover>

            </BrowserRouter>
        </div>
    );
}

export default App;
