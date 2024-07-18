"use client"
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useCallback } from 'react'
import useEmblaCarouse2l from 'embla-carousel-react'

export default function Slider() {


    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay || !("stopOnInteraction" in autoplay.options)) return
    
        const resetOrStop =
          autoplay.options.stopOnInteraction === false
            ? (autoplay.reset as () => void)
            : (autoplay.stop as () => void)
    
        resetOrStop()
      }, [])
    return (
       <section className="flex w-[300px] flex-col gap-4 overflow-hidden slider" >
            <div className="flex slide-track">
            <figure
                className=" slide relative flex h-fit aspect-square w-full flex-none cursor-pointer flex-col justify-end rounded-xl border-none"
                onClick={() => { console.log("Tt")}}
            >
                 {/* 이미지 */}
                 <Image 
                    src={"https://test-it.co.kr/face93.png"}
                    alt="card"
                    fill
                    className="absolute size-full rounded-xl border-none"
                    />
                    
                <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                    <h2 className="text-14 font-semibold text-white-1">{"이미지 타이틀"}</h2>
                    <p className="text-12 font-normal text-white-2">{"이미지 이름"}</p>
                </div>
            </figure>
              <figure
                className="relative flex h-fit aspect-square w-full flex-none cursor-pointer flex-col justify-end rounded-xl border-none"
                onClick={() => { console.log("Tt")}}
            >
                 {/* 이미지 */}
                 <Image 
                    src={"https://test-it.co.kr/face93.png"}
                    alt="card"
                    fill
                    className="absolute size-full rounded-xl border-none"
                    />
                    
                <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                    <h2 className="text-14 font-semibold text-white-1">{"이미지 타이틀"}</h2>
                    <p className="text-12 font-normal text-white-2">{"이미지 이름"}</p>
                </div>
            </figure>
            <figure
                className="relative flex h-fit aspect-square w-full flex-none cursor-pointer flex-col justify-end rounded-xl border-none"
                onClick={() => { console.log("Tt")}}
            >
                 {/* 이미지 */}
                 <Image 
                    src={"https://test-it.co.kr/face93.png"}
                    alt="card"
                    fill
                    className="absolute size-full rounded-xl border-none"
                    />
                    
                <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                    <h2 className="text-14 font-semibold text-white-1">{"이미지 타이틀"}</h2>
                    <p className="text-12 font-normal text-white-2">{"이미지 이름"}</p>
                </div>
            </figure>
            <figure
                className="relative flex h-fit aspect-square w-full flex-none cursor-pointer flex-col justify-end rounded-xl border-none"
                onClick={() => { console.log("Tt")}}
            >
                 {/* 이미지 */}
                 <Image 
                    src={"https://test-it.co.kr/face93.png"}
                    alt="card"
                    fill
                    className="absolute size-full rounded-xl border-none"
                    />
                    
                <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                    <h2 className="text-14 font-semibold text-white-1">{"이미지 타이틀"}</h2>
                    <p className="text-12 font-normal text-white-2">{"이미지 이름"}</p>
                </div>
            </figure>
            <figure
                className="relative flex h-fit aspect-square w-full flex-none cursor-pointer flex-col justify-end rounded-xl border-none"
                onClick={() => { console.log("Tt")}}
            >
                 {/* 이미지 */}
                 <Image 
                    src={"https://test-it.co.kr/face93.png"}
                    alt="card"
                    fill
                    className="absolute size-full rounded-xl border-none"
                    />
                    
                <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                    <h2 className="text-14 font-semibold text-white-1">{"이미지 타이틀"}</h2>
                    <p className="text-12 font-normal text-white-2">{"이미지 이름"}</p>
                </div>
            </figure>
            </div>
        </section>
    )
}

function useEmblaCarousel(arg0: { loop: boolean }, arg1: any[]): [any, any] {
    throw new Error('Function not implemented.')
}
