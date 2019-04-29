import React, { Component, Fragment } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Context from "../../contexts/LanguageContext";

class ThemeButton extends Component {

    renderSubmit = (theme, language) => (
            language === 'english'
                ? theme.english
                : language === 'ukrainian'
                ? theme.ukrainian : theme.russian
        );

    renderField = (theme, toggleTheme, language, funcSubmit) => (
        <Fragment>
            <input
                type="checkbox"
                name="theme"
                id="theme"
                onClick={ toggleTheme }
            />
            <label htmlFor="theme">{ funcSubmit(theme, language) }</label>
        </Fragment>
    );

    render() {
        return (
            <Fragment>
                <Context.Consumer>
                   {({language}) => (
                        <ThemeContext.Consumer>
                            {({theme, toggleTheme}) => this.renderField(theme, toggleTheme, language, this.renderSubmit)}
                        </ThemeContext.Consumer>
                   )}
                </Context.Consumer>
            </Fragment>
        );
    }
}

export default ThemeButton;