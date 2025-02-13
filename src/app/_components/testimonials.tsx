'use client'
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import tutor1 from '../../../public/tutor1.png';
import tutor2 from '../../../public/tutor1.png';

const testimonials = [
    {
        author: "Noj",
        profission: "Developer",
        depoiment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nam in exercitationem voluptatum dolore corporis, quas voluptate? Mollitia minima, ratione vitae rerum atque, aliquam maiores ipsam, voluptas possimus voluptates voluptatem!",
        image: tutor1
    },
    {
        author: "Noj",
        profission: "Developer",
        depoiment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nam in exercitationem voluptatum dolore corporis, quas voluptate? Mollitia minima, ratione vitae rerum atque, aliquam maiores ipsam, voluptas possimus voluptates voluptatem!",
        image: tutor2
    },

]

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width:768px": { slidesToScroll: 1 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }
    return (
        <section className="bg-[#ffd449] py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className='overflow-hidden' ref={emblaRef}>
                        
                        <div className="flex">
                            {
                                testimonials.map((item, i) => (
                                    <div key={i} className="flex-[0_0_100%] min-w-0 px-3">
                                        <article className="bg-[#1e293b] text-white p-6 space-y-4 h-full flex flex-col rounded-2xl">
                                            <div className="flex flex-col items-center text-center space-y-4">
                                                <div className="relative w-24 h-24">
                                                    <Image src={item.image} alt="Foto da testemunha" fill sizes="96px" className="object-cover rounded-full" />


                                                </div>
                                                <p className="text-gray-200">{item.depoiment}</p>
                                                <div>
                                                    <p className="font-bold">{item.author}</p>
                                                    <p className="text-sm text-gray-400">{item.profission}</p>
                                                </div>

                                            </div>

                                        </article>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button type="button" className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-10 z-10" onClick={scrollPrev}><ChevronLeft className="w-6 h-6 text-gray-600" /></button>
                    <button type="button" className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-10 z-10" onClick={scrollNext}><ChevronRight className="w-6 h-6 text-gray-600 " /></button>
                </div>
            </div>

        </section>
    )
}