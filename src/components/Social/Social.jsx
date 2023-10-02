import React from 'react';
import {guideSVG} from "@/components/SVGs/guide";
import {socialLinks} from "@/components/Header/links";

export default function Social(props) {
    return (
        <div className={''}>

            <div className={'header-social flex flex-col gap-2.5 pb-5 w-[0px] group-hover:w-[115px] whitespace-nowrap overflow-hidden transition-all duration-500'}>

                {socialLinks && socialLinks.map((item) => {
                    return (
                        <a href={ item.link } className={'flex items-center gap-2.5'} target={'_blank'}>
                            <div className={'w-4 h-4'}>
                                { item.icon }
                            </div>
                            <div className={''}>
                                { item.text }
                            </div>
                        </a>
                    )
                })}

            </div>

            <div className={'w-8 group-hover:w-[0px] overflow-hidden transition-all duration-500'}>
                { guideSVG.svgSocial }
            </div>

        </div>
    );
}