import React, { Component } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

class Field extends Component {

    renderSubmit = value => value === 'english'
        ? 'Name' : value === 'ukrainian' ? "Ім'я" : 'Имя';

    render() {
        return (
            <div className="field">
                <label>
                    <LanguageContext.Consumer>
                        {({language}) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
                </label>
                <input type="text" name="name" />
            </div>
        );
    }
}

export default Field;