"use client"
import Footer from "@/app/components/Footer";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";


const gameImages = [
    "/images/arknights-detail.png",
    "/images/reverse-1999-detail.png",
    "/images/zzz-detail.png",
    "/images/wuwa-detail.png",
    "/images/nikke-detail.png",
]
const gameIcons = [
    "/images/arknights-icon.png",
    "/images/reverse-1999-icon.png",
    "/images/zzz-icon.png",
    "/images/wuwa-icon.png",
    "/images/nikke-icon.png",
]
const gameNames = [
    "Arknights",
    "Reverse 1999",
    "Zenless Zone Zero",
    "Wuthering Waves",
    "Nikke",
]
const mainStoryNames = [
    "Main Story",
    "Main Story/Event",
    "Commision",
    "Quest",
    "Main Story"
]
const mainStoryDifficulties = [
    [
        "Normal",
        "Challenge"
    ],
    [
        "Normal",
        "Hard"
    ],
    [
        "Easy",
        "Hard"
    ],
    [
        "Normal",
        "Hard"
    ],
    [
        "Normal",
        "Hard"
    ]
]
const mainStoryPrices = [
    [
        2000,
        3000
    ],
    [
        2000,
        3000
    ],
    [
        3000,
        4000
    ],
    [
        2000,
        3000
    ],
    [
        2000,
        3000
    ]
]
const mainStoryNotes = [
    "*Harga bisa berubah sesuai dengan progres akun",
    "*Harga bisa berubah sesuai dengan progres akun",
    "",
    "",
    ""
]
const rawatAkunPrices = [
    [
        3000,
        14000,
        45000,
        150000
    ],
    [
        3000,
        15000,
        45000,
        150000
    ],
    [
        5000,
        25000,
        80000,
        200000
    ],
    [
        3000,
        15000,
        45000,
        150000
    ],
    [
        5000,
        25000,
        80000,
        200000
    ],
]
const otherJokiLists = [
    [
        "SSS",
        "Integrated Strategies",
        "Annihilation",
        "Event",
        "CC"
    ],
    [
        "Limbo",
        "Manne Bulletin",
        "Event",
        "UTTU",
        "Series of Dusk",
        "Three Doors"
    ],
    [
        "Shiyu Defense",
        "Hollow Zero",
        "Event",
        "Main Story",
        "Investigator Training Course",
        "The Mystery of Arpeggio Fault"
    ],
    [
        "Limbo",
        "Manne Bulletin",
        "Event",
        "UTTU",
        "Series of Dusk",
        "Three Doors"
    ],
    [
        "Raid & Union Raid",
        "Tribe",
        "Lost Sector",
        "Event"
    ]
]
const stamInGames = [
    "Sanity",
    "Cellular Activity",
    "Battery",
    "Cellular Activity",
    "Stamina"
]

export default function DetailGame() {
    const params = useParams()
    const id = Array.isArray(params["id-game"]) ? params["id-game"][0] : params["id-game"] as string; // Pastikan hanya mengambil string pertama
    const mainStoryDifficulty = mainStoryDifficulties[parseInt(id) - 1];
    const mainStoryPrice = mainStoryPrices[parseInt(id) - 1];
    const rawatAkunPrice = rawatAkunPrices[parseInt(id) - 1];
    const otherJokiList = otherJokiLists[parseInt(id) - 1];

    useEffect(() => {
        if (!id || isNaN(parseInt(id)) || parseInt(id) > 5 || parseInt(id) < 1) {
            window.location.href = "/";
        }
    }, [id]);

    const formatRupiah = (number: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\,00)$/, '');
    };

    return (
        <div className="w-full">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Animasi awal
                animate={{ opacity: 1, y: 0 }}  // Animasi akhir
                transition={{ duration: 0.8 }}  // Durasi animasi 
                className="w-full flex items-center justify-center"
            >
                <MaxWidthWrapper className="flex flex-col items-center justify-center mx-0">
                    <Image src={gameImages[parseInt(id) - 1]} alt="game" width={1247} height={0} className="w-full" draggable={false} />
                    <div className="w-[90%] h-auto md:h-[145px] rounded-[20px] relative md:translate-y-[-120%] lg:translate-y-[-120%] flex flex-col md:flex-row items-center justify-center  md:justify-start px-8 md:px-0 pt-24 pb-8 md:py-0 gap-0 md:gap-12">
                        <Image src="/images/Gradient.png" alt="gradient" width={1440} height={1440} draggable={false} className="absolute top-0 left-0 w-full h-full rounded-[20px] object-cover" />
                        <Image src={gameIcons[parseInt(id) - 1]} alt="icon" width={319} height={319} draggable={false} className="size-[200px] md:size-[225px] lg:size-[275px] transform md:-translate-y-10 lg:-translate-y-8 md:-translate-x-1 lg:-translate-x-2 hover:scale-110 transition-all duration-300 -translate-y-32 absolute md:relative" />
                        <div className="flex flex-col items-start justify-center z-10 md:gap-3 lg:gap-4 md:-translate-x-16 lg:-translate-x-20">
                            <h1 className="text-white font-extrabold text-xl md:text-2xl text-shadow-lg"> {gameNames[parseInt(id) - 1]} </h1>
                            <p className="text-white text-xs md:text-sm lg:text-[16px] text-justify text-shadow-lg"> joki akun {gameNames[parseInt(id) - 1]}-mu sekarang, cukup dengan memilih layanan yang tersedia di bawah ini. Dan juga anda dapat menghubungi kami jika ada kemauan anda yang tidak terdaftar di layanan kami. </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center w-full my-12 md:my-0 translate-y-0 md:-translate-y-20">
                        <div className="w-[45%] min-w-[320px] sm:min-w-[500px] relative h-auto">
                            <Image src="/images/Gradient.png" alt="gradient" width={1440} height={1440} draggable={false} className="absolute top-0 left-0 w-full h-full rounded-[20px] object-cover z-0" />
                            <div className="w-full h-full flex flex-col items-start justify-center px-8 py-4">
                                <p className="text-white text-shadow-lg font-extrabold text-xl z-10 w-full text-center"> Opsi Joki </p>
                                <p className="text-black z-10 mt-2 bg-white rounded-[5px] py-0.5 px-2 border-[2px] border-gray"> {mainStoryNames[parseInt(id) - 1]} </p>
                                <div className="w-full flex items-center justify-start z-10 gap-8 my-2">
                                    {mainStoryDifficulty.map((difficulty, index) => (
                                        <div className="w-[100px] flex flex-col items-center justify-center bg-[#797877] rounded-[5px]" key={index}>
                                            <p className="py-0.5 text-white text-shadow-lg"> {difficulty} </p>
                                            <p className="w-full text-center bg-white py-2 rounded-[5px] font-extrabold"> {formatRupiah(mainStoryPrice[index])} </p>
                                        </div>
                                    ))}
                                </div>
                                <p className="z-10 text-white text-xs text-shadow-lg pl-2"> {mainStoryNotes[parseInt(id) - 1]} </p>
                                <p className="z-10 text-black my-2 bg-white rounded-[5px] py-0.5 px-2 border-[2px] border-gray"> Rawat Akun </p>
                                <div className="w-full flex flex-wrap items-center justify-start z-10 gap-x-8 gap-y-2">
                                    <div className="w-[100px] flex flex-col items-center justify-center bg-[#797877] rounded-[5px]">
                                        <p className="py-0.5 text-white text-shadow-lg"> Daily </p>
                                        <p className="w-full text-center bg-white py-2 rounded-[5px] font-extrabold"> {formatRupiah(rawatAkunPrice[0])} </p>
                                    </div>
                                    <div className="w-[100px] flex flex-col items-center justify-center bg-[#797877] rounded-[5px]">
                                        <p className="py-0.5 text-white text-shadow-lg"> Weekly </p>
                                        <p className="w-full text-center bg-white py-2 rounded-[5px] font-extrabold"> {formatRupiah(rawatAkunPrice[1])} </p>
                                    </div>
                                    <div className="w-[100px] flex flex-col items-center justify-center bg-[#797877] rounded-[5px]">
                                        <p className="py-0.5 text-white text-shadow-lg"> Monthly </p>
                                        <p className="w-full text-center bg-white py-2 rounded-[5px] font-extrabold"> {formatRupiah(rawatAkunPrice[2])} </p>
                                    </div>
                                    <div className="w-[100px] flex flex-col items-center justify-center bg-[#797877] rounded-[5px]">
                                        <p className="py-0.5 text-white text-shadow-lg"> VIP </p>
                                        <p className="w-full text-center bg-white py-2 rounded-[5px] font-extrabold"> {formatRupiah(rawatAkunPrice[3])} </p>
                                    </div>
                                </div>
                                <p className="z-10 text-white text-xs text-shadow-lg pl-2 mt-2"> *Untuk penggunaan Sanity bisa request. Hanya berlaku untuk joki Weekly,Monthly & VIP. </p>
                                <p className="z-10 text-black my-2 bg-white rounded-[5px] py-0.5 px-2 border-[2px] border-gray"> Other Joki </p>
                                <div className="w-full flex flex-wrap items-center justify-start z-10 gap-x-2 gap-y-1">
                                    {otherJokiList.map((joki, index) => (
                                        <p className="text-black bg-[#CBCCB3] px-2 rounded-[5px]" key={index}> {joki} </p>
                                    ))}
                                    <p className="text-black bg-[#CBCCB3] px-2 rounded-[5px]"> dll... </p>
                                </div>
                                <p className="z-10 text-white text-xs text-shadow-lg pl-2 mt-2"> *Harga other joki menyesuaikan dengan permintaan. Untuk info lebih lanjut dapat menghubungi admin. </p>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </motion.div>
            <Footer />
        </div>
    )
}