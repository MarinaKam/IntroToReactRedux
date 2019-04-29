import React from 'react';
import UserCreate from "../UserCreate/UserCreate";
import Toolbar from "../Toolbar/Toolbar";
import { ThemeStore } from '../../contexts/ThemeContext';
import { LanguageStore } from "../../contexts/LanguageContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const App = () =>  (
        <section className="ui container" >
            <LanguageStore>
                <LanguageSelector />
                <ThemeStore>
                    <Toolbar />
                </ThemeStore>
                <UserCreate />
            </LanguageStore>
        </section>
    );

export default App;