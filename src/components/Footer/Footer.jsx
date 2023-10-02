import React from 'react';

export default function Footer(props) {
    return (
        <footer className={'ml-24 px-11 pt-28 pb-4 border-t border-c-grey flex justify-between items-center text-c-grey text-sm font-semibold font-unbounded'}>

            <a href={'/personally'} className={'hover:text-ochre'}>
                Политика конфиденциальности
            </a>
            <div>
                © Все права защищены 2023
            </div>
            <a href={'https://mapbiz.ru'} className={'hover:text-ochre'} target={'_blank'}>
                Создание сайтов MaPbiz Group
            </a>
        </footer>
    );
}