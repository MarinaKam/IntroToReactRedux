import React, { Component } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

class Button extends Component {

    renderSubmit = value => value === 'english'
        ? 'Submit' : value === 'ukrainian'
            ? 'Зберегти' : 'Сохранить';

    render() {
        return (
            <button className="ui primary button">
                <LanguageContext.Consumer>
                    {({language}) =>  this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;