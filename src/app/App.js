import React, {useState} from 'react';
import {Route,Redirect, BrowserRouter} from 'react-router-dom';
import BookCover from '../component/book/BookCover';
import Mutations from '../component/book/books/Mutations'
import Equipment from '../component/book/books/Equipment'
import Ability from "../component/book/books/Ability";
import './App.css';
import Skills from "../component/book/books/Skills";
import Spells from "../component/book/books/Spells";
import Beasts from "../component/book/books/Beasts";
import Professions from "../component/book/books/Professions";
import Login from "../component/book/login/Login";
import Register from "../component/book/login/Register";
// import Logout from "../component/book/login/Logout";
import CharacterSheet from "../component/book/character/CharacterSheet";
import NewCharacterSheet from "../component/book/character/modules/new/NewCharacterSheet";


function App(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            isAuthenticated === true
                ? <Component {...rest} {...props} />
                : <Redirect to='/login' />
        )} />
    );
    return (
        <div className="App">
            <BrowserRouter>

                {/*
                    App.js dostal swoj folder *SadPepe*
                */}

                <BookCover isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>

                    <PrivateRoute path={"/user/sheet"} component={CharacterSheet}/>
                    <PrivateRoute path={"/user/new"} component={NewCharacterSheet}/>
                    <Route path="/login" render={(props)=><Login {...props} setIsAuthenticated={setIsAuthenticated}/>}/>
                    <Route path="/register" component={Register}/>
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
