import Link from "next/link";
import {guideSVG} from "@/components/SVGs/guide";

export default function HomeMain(props) {
    return (
        <main>
            <div className={'h-[700px] bg-center bg-cover bg-no-repeat relative'} style={{backgroundImage: 'url(/img/home/promo.webp)'}}>
                <div className="w-full h-full absolute left-0 top-0"
                     style={{backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'}}
                ></div>
                <div className="w-full h-full absolute left-0 top-0"
                     style={{backgroundImage: 'linear-gradient(to left, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'}}
                ></div>
            </div>
            <div className={'ml-24 px-11'}>
                <div className={'flex pt-24 pb-28 relative'}>
                    <div className={'absolute -top-14 left-0 font-unbounded text-[65px] font-semibold tracking-[2.3px]'}>
                        <h1>Скульптор Виктор Мосиелев</h1>
                    </div>
                    <div className={'w-[35%] text-lg tracking-[0.7px] font-semibold'}>
                        Рад приветствовать вас на персональном сайте-блоге. Этот проект служит цели облегчения коммуникации с автором, трансляции идей и творчества.
                    </div>
                    <div className={'w-[65%] flex justify-end'}>
                        <Link href={'/gallery'} className={'group flex items-center font-semibold text-ochre tracking-[0.65px]'}>
                            <div className={'group-hover:hidden'}>
                                { guideSVG.svgBtn }
                            </div>
                            <div className={'hidden group-hover:block'}>
                                { guideSVG.svgBtnActive }
                            </div>
                            <div className={'group-hover:text-white'}>
                                Онлайн выставка
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}