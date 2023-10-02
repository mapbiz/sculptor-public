'use client'
import React, {useState} from 'react';
import Image from "next/image";

export default function HomeMovie(props) {

    const [playStatus, setPlayStatus] = useState(false)

    const isPlaying = (status) => {
        setPlayStatus(status)
    }

    return (
        <>
            {playStatus ?
                <div className="w-full">
                    <div className={'relative'}>
                        <Image onClick={() => setPlayStatus(false)} className={'z-20 absolute right-3 top-3 cursor-pointer'} height={30} width={30} src={'/img/home/close.svg'} alt={'посмотреть видео кнопка'}></Image>
                        <video className={`video w-full h-screen object-cover rounded-[10px]`} autoPlay loop muted playsInline>
                            <source src={'https://jsnext.vercel.app/video/promo-mapbiz.mp4'} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                :
                <div className="w-full h-full">
                    <div className={'relative w-full h-full'}>
                        <div className="w-full h-screen bg-cover bg-[100%_32%] bg-no-repeat cursor-play"
                             style={{backgroundImage: 'url(/img/home/movie.webp)'}}
                             onClick={() => isPlaying(true)}
                        >
                        </div>
                    </div>
                </div>
            }
        </>
    );
}