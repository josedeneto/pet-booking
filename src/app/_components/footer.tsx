import React from 'react';
import golden from '../../../public/golden.png';
import royal from '../../../public/royal.png';
import primier from '../../../public/primier.png';
import whiskas from '../../../public/whiskas.png';
import natural from '../../../public/natural.png';
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';


const brands = [
    { name: "Royal Canin", logo: golden },
    { name: "Golden", logo: royal },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden }
];

export function Footer() {
    return (
        <section className="bg-[#e84c3d] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {
                            brands.map((item, i) => (
                                <div key={i} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                    <Image src={item.logo} alt={item.name} width={100} 
                                        height={50}
                                        quality={100}
                                        style={{
                                            width: "auto",
                                            height: "auto"
                                        }}
                                        className='object-contain' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='mb-2 text-2xl font-semibold'>Pet Shop Dev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor </p>
                        <a target='_blank' href={`https://wa.me/921080429?text=Olá vim pelo site e gostaria de mais informações`} className='bg-green-500 w-fit px-4 py-1 rounded-md flex items-center gap-2'>
                           <WhatsappLogo className='w-5 h-4'/> Contacto via Whatsapp
                        </a>
                    </div>

                    <div>
                        <h3 className='mb-2 text-2xl font-semibold'>Contactos</h3>
                        <p className='mb-4'>Email: teste@gmail.com</p>
                        <p className='mb-4'>Telefone: (+244) 921 083 432</p>
                        <p>Rua do Pardal, Gamek, Luanda</p>
                    </div>

                    <div>
                        <h3 className='mb-2 text-2xl font-semibold'>Siga-nos</h3>
                        <div className='flex gap-4'>
                            <a href="http://"><FacebookLogo className='w-8 h-8'/></a>
                            <a href="http://"><InstagramLogo className='w-8 h-8'/></a>
                            <a href="http://"><LinkedinLogo className='w-8 h-8'/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}