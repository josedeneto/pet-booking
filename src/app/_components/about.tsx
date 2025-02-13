import Image from "next/image"
import about1 from '../../../public/about-1.png'
import about2 from '../../../public/about-2.png'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import { MapPin } from "lucide-react";
export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative"  data-aos="fade-up-right">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image src={about1} alt="foto do cachorro" fill quality={100} priority className="object-cover hover:scale-110 duration-300" />
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
                        <Image src={about2} alt="foto do cachorro 2" fill quality={100} priority className="" />
                    </div>
                </div>

                <div className="space-y-6 mt-10"  data-aos="fade-up-left" data-os-delay="300">
                    <h2 className="text-4xl font-bold">Sobre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat tempora aliquam ullam unde voluptatum odit, quasi atque quam consectetur eum aliquid molestias commodi nam! Sequi, ducimus quam? Iste, esse.</p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">Aberto desde 2006</li>
                        <li className="flex items-center gap-2">Equipe com mais veterinários</li>
                        <li className="flex items-center gap-2">Qualidade é a nossa prioridade</li>


                    </ul>
                   <div className="flex gap-2">
                   <a target='_blank' href={`https://wa.me/921080429?text=Olá vim pelo site e gostaria de mais informações`} className="bg-[#e84c3d] py-2 text-white flex items-center gap-2 px-4 rounded-md"><WhatsappLogo className='w-5 h-5'/>Contacto via Whatsapp</a>

                   <a href="#" className="py-2 text-black flex items-center gap-2 px-4 rounded-md"><MapPin/>Endereço da Loja</a>
                   </div>

                    
                </div>
            </div>
                
            </div>
        </section>
    )
}

