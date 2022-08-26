import * as React from 'react'
import { useAdvice } from './hooks/useAdvice'
import pattern from './images/pattern-divider-desktop.svg'
import patternMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
export function App() {
    const { slip, refetch } = useAdvice()
    return (
        <div className="flex justify-center items-center bg-dark-blue h-[100vh]">
            <div className="flex flex-col items-center relative bg-darkgray-blue md:w-1/2 h-1/3 w-[90vw] px-5 py-5 rounded-2xl">
                <h1 className="text-neon-green text-xs tracking-widest mb-3">
                    Advice #{slip?.id}
                </h1>
                <p className="flex flex-grow justify-center items-center text-center text-xl text-white font-bold">
                    "{slip?.advice}"
                </p>
                <picture className="basis-[50px] flex-grow-0 mt-2">
                    <source
                        srcSet={patternMobile}
                        media="(min-width: 600px)"
                    />
                    <img src={pattern} />
                </picture>
                <div
                    onClick={() => refetch()}
                    className="absolute cursor-pointer bg-neon-green rounded-full p-3 bottom-[-25px]"
                >
                    <img src={dice} />
                </div>
            </div>
        </div>
    )
}
