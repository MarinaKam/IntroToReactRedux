import React, { Component, Fragment } from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

class ThemeButton extends Component {

    renderSubmit = (theme, language) => (
        language === 'english'
            ? theme.english
            : language === 'ukrainian'
            ? theme.ukrainian : theme.russian
    );

    renderField = (theme, toggleTheme, language) => (
        <Fragment>
            <input
                type="checkbox"
                name="theme"
                id="theme"
                onClick={ toggleTheme }
            />
            <label htmlFor="theme">{ this.renderSubmit(theme, language) }</label>
        </Fragment>
    );

    render() {
        return (
            <Fragment>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme, language}) => this.renderField(theme, toggleTheme, language)}
                </ThemeContext.Consumer>
            </Fragment>
        );
    }
}

export default ThemeButton;