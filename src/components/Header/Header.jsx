import React from 'react';
import Link from "next/link";
import {guideSVG} from "@/components/SVGs/guide";
import Nav from "@/components/Header/Nav";

export default function Header(props) {

    return (
        <header
            className={'inline-block fixed left-0 top-0 h-screen w-auto pl-4 pt-4 pb-4 pr-5 border border-white flex flex-col justify-between'}
        >
            <div className={'flex flex-col gap-20'}>
                <div className={''}>
                    { guideSVG.svgLogo }
                </div>
                <Nav />
            </div>
            <div className={''}>
                { guideSVG.svgSocial }
            </div>
        </header>
    );
}