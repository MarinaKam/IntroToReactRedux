import React, { Component, Fragment } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

class LanguageSelector extends Component {

    static contextType = LanguageContext;

    renderLanguage = language => language === 'english' ? ' Select a language: '
        : language === 'ukrainian' ? "Виберіть мову: " : 'Выберите язык: ';


    render() {
        return (
            <Fragment>
                <LanguageContext.Consumer>
                    {({language}) => this.renderLanguage(language)}
                </LanguageContext.Consumer>
                <i onClick={() => this.context.onLanguageChange('english')}
                   className='us flag'></i>
                <i onClick={() => this.context.onLanguageChange('ukrainian')}
                   className='ua flag'></i>
                <i onClick={() => this.context.onLanguageChange('russian')}
                   className='ru flag'></i>
            </Fragment>
        );
    }
}

export default LanguageSelector;