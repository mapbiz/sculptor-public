'use client'
import React, {createContext, useState} from 'react';

// Создаем контекст
const DataDevelopContext = createContext();

const DataDevelopProvider = ({ children }) => {

    // язык сайта
    const [language, setLanguage] = useState('ru')

    const isLanguage = (lang) => {
        setLanguage(lang)
    }

    // Передаем значения контекста в Provider
    return (
        <DataDevelopContext.Provider
            value={{
                language, isLanguage
            }}>
            {children}
        </DataDevelopContext.Provider>
    );

}

export {DataDevelopContext, DataDevelopProvider};