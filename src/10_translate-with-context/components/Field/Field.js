import React, { Component } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

class Field extends Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english'
        ? 'Name' : this.context === 'ukrainian' ? "Ім'я" : 'Имя';

        return (
            <div className="field">
                <label>{text}</label>
                <input type="text" name="name" placeholder="" />
            </div>
        );
    }
}

export default Field;