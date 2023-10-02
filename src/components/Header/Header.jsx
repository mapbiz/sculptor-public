import React from 'react';
import Link from "next/link";
import {guideSVG} from "@/components/SVGs/guide";
import Nav from "@/components/Nav/Nav";
import Social from "@/components/Social/Social";

export default function Header(props) {

    return (
        <header
            className={'inline-block z-10 group fixed left-0 top-0 h-screen w-auto pl-4 pt-4 pb-4 pr-5 flex flex-col justify-between bg-black font-exo2'}
        >
            <div className={'flex flex-col gap-20'}>
                <div className={'w-11'}>
                    { guideSVG.svgLogo }
                </div>
                <Nav />
            </div>
            <Social />
        </header>
    );
}