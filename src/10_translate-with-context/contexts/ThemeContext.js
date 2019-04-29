import React, { Component } from 'react';

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee',
        english: 'Dark theme',
        ukrainian: 'Темна тема',
        russian: 'Темная тема',
    },
    dark: {
        color: '#ffffff',
        background: '#222222',
        english: 'Light theme',
        ukrainian: 'Світла тема',
        russian: 'Светлая тема',
    },
};

const ThemeContext =  React.createContext({
    theme: themes.light,
});

export class ThemeStore extends Component {

    state = {
        theme: themes.light,
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

    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark
                ? themes.light
                : themes.dark,
        }));
    };

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme}}>
                { this.props.children }
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContext;