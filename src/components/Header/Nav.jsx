'use client'
import Link from "next/link";
import {guideSVG} from "@/components/SVGs/guide";
import {usePathname} from "next/navigation";
import {navLinks} from "@/components/Header/links";

export default function Nav(props) {

    const pathname = usePathname();
    // console.log(router);

    return (
        <nav className={'header-nav group flex flex-col gap-10'}>
            { navLinks && navLinks.map((item, index) => {

                return (
                    <Link key={ index } href={ item.link } className={`flex items-center gap-5 ${ item.link === pathname ? 'link-active' : '' }`}>
                        <div>
                            { item.icon }
                        </div>
                        <div className={'w-[0px] group-hover:w-[115px] whitespace-nowrap overflow-hidden transition-all duration-500'}>
                            { item.text }
                        </div>
                    </Link>
                )
            }) }

        </nav>
    );
}