'use client'
import React, {useContext, useEffect, useState} from 'react';
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";

export default function Language(props) {

    const { language, isLanguage } = useContext(DataDevelopContext);

    return (
        <div className={'fixed z-10 top-2.5 right-2.5 p-3 rounded-[7px] border border-white bg-black font-unbounded'}>
            <button
                onClick={() => isLanguage('ru')}
                className={ language === 'ru' && 'font-semibold text-ochre' }>
                Ru
            </button>
            /
            <button
                onClick={() => isLanguage('en')}
                className={ language != 'ru' && 'font-semibold text-ochre' }>
                En
            </button>
        </div>
    );
}