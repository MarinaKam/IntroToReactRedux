import React, {Component} from 'react';
import UserCreate from "../UserCreate/UserCreate";
import Toolbar from "../Toolbar/Toolbar";
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import LanguageContext from "../../contexts/LanguageContext";

class App extends Component {

    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };

    state = {
        language: 'english',
        theme: themes.light,
        toggleTheme: this.toggleTheme,
    };

    componentDidMount() {
        document.body.style.backgroundColor = this.state.theme.background;
        document.body.style.color = this.state.theme.color;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.theme !== this.state.theme){
            document.body.style.backgroundColor = this.state.theme.background;
            document.body.style.color = this.state.theme.color;
        }
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = null;
        document.body.style.color = null;
    }

    onLanguageChange = language => this.setState({ language });


    render() {
        const { language } = this.state;
        const text = language === 'english'
            ? ' Select a language: '
            : language === 'ukrainian'
                ? "Виберіть мову: " : 'Выберите язык: ';
        return (
            <section className="ui container" >
                {text}
                <i onClick={() => this.onLanguageChange('english')}
                    className='us flag'></i>
                <i onClick={() => this.onLanguageChange('ukrainian')}
                    className='ua flag'></i>
                <i onClick={() => this.onLanguageChange('russian')}
                    className='ru flag'></i>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar />
                </ThemeContext.Provider>
                <LanguageContext.Provider value={language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </section>
        );
    }
}

export default App;