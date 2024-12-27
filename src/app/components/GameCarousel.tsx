"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Link from "next/link";


const linkImages = [
    '/images/arknights-paging.png',  // Gambar untuk slide 1
    '/images/reverse-1999-paging.png', // Gambar untuk slide 2
    '/images/zzz-paging.png', // Gambar untuk slide 3
    '/images/wuwa-paging.png', // Gambar untuk slide 4
    '/images/nikke-paging.png', // Gambar untuk slide 5
];

const bgImages = [
    '/images/arknights.png',  // Gambar untuk slide 1
    '/images/reverse-1999.png', // Gambar untuk slide 2
    '/images/zzz.png', // Gambar untuk slide 3
    '/images/wuwa.png', // Gambar untuk slide 4
    '/images/nikke.png', // Gambar untuk slide 5
];

export default function GameCarousel() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Animasi awal
            animate={{ opacity: 1, y: 0 }}  // Animasi akhir
            transition={{ duration: 0.8 }}  // Durasi animasi
            className="w-full flex flex-col items-center"
        >
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]} // Gunakan modul autoplay
                autoplay={{
                    delay: 3000, // Durasi antar slide (ms)
                    disableOnInteraction: false, // Jangan hentikan autoplay jika pengguna berinteraksi
                }}
                effect='fade' // Menggunakan efek fade
                spaceBetween={0}
                slidesPerView={1}
                loop={true} // Membuat slide berulang
                speed={800} // Durasi transisi antar slide lebih lambat (ms)
                className='w-full cursor-grab'
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}" key=${index}></span>`;
                    },
                }}
            >
                {bgImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image} width={1440} height={0} alt={`Game ${index + 1}`} className="w-full object-cover h-[400px] sm:h-[500px] md:h-auto" draggable={false} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex items-center justify-center md:justify-start gap-3 sm:6 md:gap-9 z-10 w-full md:pl-12 lg:pl-20 translate-y-0 md:translate-y-[-200px] lg:translate-y-[-325px] mt-4 md:mt-0">
                {linkImages.map((image, index) => (
                    <Link href={`/detail-game/${index + 1}`} key={index}>
                        <Image
                            src={image}
                            width={125}
                            height={125}
                            alt={`Slide ${index + 1}`}
                            className="size-[40px] sm:size-[50px] md:size-[75px] lg:size-[100px] hover:scale-125 transition-all duration-300 cursor-pointer"
                            draggable={false}
                        />
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}