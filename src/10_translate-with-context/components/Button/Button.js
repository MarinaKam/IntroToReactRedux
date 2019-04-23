import React, { Component } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

class Button extends Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english'
            ? 'Submit' : this.context === 'ukrainian'
            ? 'Зберегти' : 'Сохранить';
        return (
            <button className="ui primary button">{text}</button>
        );
    }
}

export default Button;