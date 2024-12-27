"use client"
import { motion } from "motion/react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { MdOutlineMenu } from "react-icons/md"
import { usePathname, useRouter } from 'next/navigation'
import { FaCircleArrowLeft } from "react-icons/fa6"



export default function Navbar() {
    const path = usePathname()
    const router = useRouter()

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }} // Animasi awal
            animate={{ opacity: 1, y: 0 }}  // Animasi akhir
            transition={{ duration: 0.8 }}  // Durasi animasi
            className="w-full py-4 bg-[#0C0C0C]/75 backdrop-blur-lg sticky md:fixed top-0 z-50 flex items-center justify-center"
        >
            <MaxWidthWrapper className="flex items-center justify-between md:mx-20 lg:mx-60">
                <div>
                    <h1 className="hidden md:block text-white lg:text-2xl font-extrabold"> Joki Helfi </h1>

                    {path === "/" ? (
                        <h1 className="md:hidden text-white text-xl font-extrabold"> Joki Helfi </h1>
                    ) : (
                        <FaCircleArrowLeft className="text-white text-3xl md:hidden" onClick={() => router.push("/")} />
                    )}

                </div>
                <div className="hidden md:flex items-center md:gap-12 lg:gap-20">
                    <Link href="/" className="text-white text-sm"> Home </Link>
                    <Link href="/" className="text-white text-sm"> Contact </Link>
                    <Link href="/" className="text-white text-sm"> Login </Link>
                </div>
                <div className="hidden">
                    <MdOutlineMenu className="text-white text-2xl" />
                </div>
            </MaxWidthWrapper>

        </motion.div>
    )
}