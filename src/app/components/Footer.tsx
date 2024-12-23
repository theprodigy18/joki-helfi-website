"use client"
import { motion } from "motion/react"
import MaxWidthWrapper from "./MaxWidthWrapper"
export default function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Animasi awal
            animate={{ opacity: 1, y: 0 }}  // Animasi akhir
            transition={{ duration: 0.8 }}  // Durasi animasi
            className="w-full py-6 lg:py-8 bg-[#0C0C0C] flex justify-center mt-12"
        >
            <MaxWidthWrapper className="flex flex-wrap items-start justify-center lg:justify-between gap-y-6 gap-x-12 md:mx-20 lg:mx-36">
                <div className="flex flex-col items-start max-w-[380px] gap-2">
                    <h1 className="text-white lg:text-2xl font-extrabold"> Joki Helfi </h1>
                    <p className="text-white text-xs md:text-sm text-justify"> Joki helfi adalah tempat joki yang aman, murah dan terpercaya, proses cepat , pembayaran lengkap, jika ada kendala bisa hubungi kami </p>
                </div>
                <div className="flex flex-wrap items-start justify-center gap-12">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-white font-extrabold mb-1"> Map Web </h1>
                        <p className="text-white text-xs md:text-sm"> Beranda </p>
                        <p className="text-white text-xs md:text-sm"> Cek Transaksi </p>
                        <p className="text-white text-xs md:text-sm"> Ulasan </p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-white font-extrabold mb-1"> Support </h1>
                        <p className="text-white text-xs md:text-sm"> Discord </p>
                        <p className="text-white text-xs md:text-sm"> Facebook </p>
                        <p className="text-white text-xs md:text-sm"> Whatsapp </p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-white font-extrabold mb-1"> Legality </h1>
                        <p className="text-white text-xs md:text-sm"> Syarat & Ketentuan</p>
                    </div>
                </div>
                <div className="flex-[100%] flex items-center justify-center mt-8">
                    <p className="text-white text-xs font-extralight"> Copyright © 2024 Joki Helfi </p>
                </div>
            </MaxWidthWrapper>
        </motion.div>
    )
}