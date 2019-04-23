import React from 'react';

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

export const ThemeContext =  React.createContext({
    theme: themes.dark,
});