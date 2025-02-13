"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react';

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada)",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações"
    },
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada)",
        duration: "1h",
        price: "$50",
        icon: <Hotel />,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações"
    },
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada)",
        duration: "1h",
        price: "$50",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações"
    },
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada)",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações"
    }
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width:768px": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12">Serviços</h2>
                </div>

                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className="flex">
                            {
                                services.map((item, i) => (
                                    <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-[#1e293b] text-white p-6 space-y-4 h-full flex flex-col rounded-2xl">
                                            <div className="flex-1 flex items-start justify-between">

                                                <div className="flex gap-3">
                                                    <span className="text-3xl">{item.icon}</span>
                                                    <div className="">
                                                        <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                        <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-700 p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-5 h-5" />
                                                    <span>{item.duration}</span>
                                                </div>

                                                <a target='_blank' href={`https://wa.me/921080429?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`} className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">Entrar em contacto <WhatsappLogo className="w-5 h-5" /></a>
                                            </div>
                                        </article>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button type="button" className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-10 z-10" onClick={scrollPrev}><ChevronLeft className="w-6 h-6 text-gray-600"/></button>
                    <button type="button" className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-10 z-10" onClick={scrollNext}><ChevronRight className="w-6 h-6 text-gray-600 "/></button>
                </div>
            </div>

        </section>
    )
}