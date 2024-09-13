import React from "react";
import { InstagramIcon, YoutubeIcon, TelegramIcon, GmailIcon, LinkedInIcon, logo } from "../../../public";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
export function Footer() {
    const theme = useSelector((state: any) => state.theme.theme);
    return (
        <footer className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black border-t border-gray-300"
            }`} id="contact">
            <div className="container  max-w-screen-xl py-6 lg:py-8 flex flex-row justify-between flex-wrap">
                <div className="mb-6 md:mb-0 w-1/2">
                    <Link href="/" className="flex flex-col items-center">
                        <Image
                            src={logo}
                            className="w-24 h-24 mb-2"
                            alt="CodeHub"
                        />
                        <span className="self-center text-xl whitespace-nowrap">
                            CodeHub
                        </span>
                    </Link>
                </div>

                <div className="flex flex-col mt-4 justify-center items-center md:mt-0 space-y-2 rtl:space-x-reverse w-1/2">
                    <Link
                        href="https://www.instagram.com/codehub_jbiet/"
                        className=" hover:text-gray-700 w-24 flex items-center justify-start"
                    >
                        <Image src={InstagramIcon} className="w-6 h-6 mr-2" alt="Instagram" /> {/* Added margin-right */}
                        <span className="sr-only">Instagram</span>
                        <span className="">Instagram</span>
                    </Link>
                    <Link
                        href="https://www.youtube.com/c/CodeHubb/featured"
                        className=" hover:text-gray-700 w-24 flex items-center justify-start"
                    >
                        <Image src={YoutubeIcon} className="w-6 h-6 mr-2" alt="Youtube" /> {/* Added margin-right */}
                        <span className="sr-only">Youtube</span>
                        <span className="">Youtube</span>
                    </Link>
                    <Link
                        href="https://t.me/joinchat/RoqVlQw4ACxdRg83"
                        className=" hover:text-gray-700 w-24 flex items-center justify-start"
                    >
                        <Image src={TelegramIcon} className="w-6 h-6 mr-2" alt="Telegram" /> {/* Added margin-right */}
                        <span className="sr-only">Telegram</span>
                        <span className="">Telegram</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/c0dehub/"
                        className=" hover:text-gray-700 w-24 flex items-center justify-start"
                    >
                        <Image src={LinkedInIcon} className="w-6 h-6 mr-2" alt="LinkedIn" /> {/* Added margin-right */}
                        <span className="sr-only">LinkedIn</span>
                        <span className="">LinkedIn</span>
                    </Link>
                    <Link
                        href="https://mail.google.com/mail/u/0/#search/codehubcse%40jbiet.edu.in?compose=new"
                        className=" hover:text-gray-700 w-24 flex items-center justify-start"
                    >
                        <Image src={GmailIcon} className="w-6 h-6 mr-2" alt="Gmail" /> {/* Added margin-right */}
                        <span className="sr-only">Gmail</span>
                        <span className="">Gmail</span>
                    </Link>
                </div>
            </div>

            <div className={`${theme === "dark" ? "bg-black text-white border-t  border-gray-500" : "bg-white  border-t  border-gray-300"} text-center pt-5  text-black mt-6 pb-24`}>
                <span>
                    &copy; {new Date().getFullYear()} CodeHub. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;