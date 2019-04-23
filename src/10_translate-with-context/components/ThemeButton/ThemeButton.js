import React, { Component, Fragment } from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

class ThemeButton extends Component {
    render() {
        return (
            <Fragment>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme, language}) => {
                        const text = language === 'english'
                                   ? theme.english
                                   : language === 'ukrainian'
                                       ? theme.ukrainian : theme.russian;
                        return <Fragment>
                            <input
                                type="checkbox"
                                name="theme"
                                id="theme"
                                onClick={ toggleTheme }
                            />
                            <label htmlFor="theme">{ text }</label>
                        </Fragment>
                    }}
                </ThemeContext.Consumer>
            </Fragment>
        );
    }
}

export default ThemeButton;